# Architecture & Tech Stack

## 1. System Architecture
The StaffPurse Web dashboard serves as a read-only verification layer bridging our off-chain database and the on-chain Soroban contract.

- **Data Source 1 (Off-Chain)**: Supabase (PostgreSQL). Stores the raw spend records and the pre-computed Merkle proofs for each daily batch.
- **Data Source 2 (On-Chain)**: Stellar Network (Soroban). The `staffpurse-contracts` anchor contract stores the `root: BytesN<32>` for a given `batch_date: Symbol`.
- **Client Application**: A React-based web dashboard that pulls from both sources and performs client-side validation.

## 2. Tech Stack
- **Framework**: Next.js (React, TypeScript). Ideal for fast rendering and API routes.
- **Styling**: TailwindCSS for clean, minimal UI components.
- **Database Client**: `@supabase/supabase-js`.
- **Blockchain Client**: `@stellar/stellar-sdk` (for querying Soroban contract state).
- **Cryptography**: `js-sha256` or native Web Crypto API for hashing the record and validating the Merkle proof.

## 3. Data Models
### Supabase `spend_records` (Relevant Fields)
- `id`: UUID
- `amount`: Numeric
- `timestamp`: DateTime
- `employee_id`: UUID
- `merkle_proof`: JSON array of sibling hashes

### Soroban Contract State
- **Key**: `batch_date` (e.g., `2026-09-08`)
- **Value**: `root` (32-byte hash)

## 4. Verification Flow
1. User requests to view record `X`.
2. Web app fetches `X` and its `merkle_proof` from Supabase.
3. Web app computes `hash(X)`.
4. Web app queries the Soroban contract for the root corresponding to `X.timestamp`'s date.
5. Web app computes the expected root using `hash(X)` and `merkle_proof`.
6. If `expected_root == contract_root`, render the "✓ Verified on Stellar" component.
