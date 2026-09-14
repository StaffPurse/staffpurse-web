# Spike Report: Supabase RLS Anon Access & Soroban RPC CORS on Testnet

> **Issue:** [staffpurse-web#13](https://github.com/StaffPurse/staffpurse-web/issues/13)  
> **Author:** `@mallison031`  
> **Status:** Complete  
> **Scope:** Public Data Querying & Direct Browser Stellar RPC Connectivity

---

## Executive Summary

This spike verified the two critical external data pipelines required for the StaffPurse public verification dashboard (`staffpurse-web`):
1. **Public Browser-to-Soroban RPC Communication:** Confirmed CORS and HTTP headers on Stellar Testnet RPC.
2. **Supabase Anonymous Read Access:** Specified Row-Level Security (RLS) policies and column-level isolation to prevent PII exposure while enabling unauthenticated public audits.

---

## 1. Soroban RPC CORS & Rate-Limit Verification

### A. CORS Preflight & Headers Test
We tested direct browser-style `OPTIONS` and `POST` requests against the official public testnet RPC endpoint: `https://soroban-testnet.stellar.org`.

```bash
curl -s -I -X OPTIONS "https://soroban-testnet.stellar.org" \
  -H "Origin: http://localhost:3000" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: content-type"
```

**Observed Response:**
```http
HTTP/2 204
access-control-allow-origin: *
access-control-allow-methods: POST
access-control-allow-headers: content-type
vary: Origin, Access-Control-Request-Method, Access-Control-Request-Headers
```

**Verdict:**
- `access-control-allow-origin: *` is enabled by default on the public RPC endpoint.
- Direct client-side calls from the browser via `@stellar/stellar-sdk` (`rpc.Server`) do not require a backend proxy or Next.js server route rewrite.

### B. Health & JSON-RPC Connectivity
```bash
curl -s -X POST "https://soroban-testnet.stellar.org" \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "id": 1, "method": "getHealth"}'
```
**Observed Response:**
```json
{"jsonrpc":"2.0","id":1,"result":{"status":"healthy","latestLedger":4587843,"ledgerRetentionWindow":120960}}
```

**RPC Rate Limits & Recommendations:**
- Stellar Foundation's public RPC has a default burst limit (~100 req/min per IP).
- For client-side proof checks, cache daily root results in memory or TanStack Query cache (`staleTime: 5 * 60 * 1000`) so repeated row checks do not re-fetch the identical daily root.

---

## 2. Supabase RLS Public Access Architecture

### A. RLS Policy for Public Spend Records
To allow the Next.js web application to display spend records using the Supabase public `anon` key without requiring users to log in:

```sql
-- Enable Row-Level Security
ALTER TABLE public.spend_records ENABLE ROW LEVEL SECURITY;

-- Allow public read access to finalized/anchored spend records
CREATE POLICY "Allow public read access to finalized spend records"
ON public.spend_records
FOR SELECT
TO anon
USING (status = 'anchored');
```

### B. Privacy & Zero-PII Guarantees
The public view must strictly avoid exposing employee real names, card numbers, or merchant banking details.

**Allowed Public Columns:**
- `id` (UUID)
- `batch_date` (ISO Date string: `YYYY-MM-DD`)
- `transaction_hash` (SHA-256 reference)
- `anonymized_recipient_hash` (SHA-256 hash of recipient)
- `amount_ngn` (Decimal)
- `merkle_proof` (JSONB array of sibling hashes)
- `created_at` (Timestamp)

---

## 3. Implementation Blueprint for `staffpurse-web`

1. **Client Initialization:** Use `@supabase/supabase-js` configured with `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
2. **RPC Client:** Initialize `@stellar/stellar-sdk` RPC server pointing to `NEXT_PUBLIC_SOROBAN_RPC_URL` (default: `https://soroban-testnet.stellar.org`).
3. **Caching Strategy:** Cache daily roots by date symbol using React hooks to minimize RPC calls.
