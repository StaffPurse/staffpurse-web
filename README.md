# StaffPurse Web

> Public verification dashboard for StaffPurse's Soroban-anchored spend records.

The StaffPurse Verification Dashboard allows third-party auditors and business owners to cryptographically verify individual transactions. It reads raw records from our off-chain Supabase database, fetches the corresponding daily Merkle root anchored on Stellar via Soroban, and performs client-side verification to prove ledger integrity.

---

## 🛠 Tech Stack

- **Frontend:** Next.js (React, TypeScript)
- **Styling:** Tailwind CSS
- **Database Client:** Supabase (`@supabase/supabase-js`)
- **Blockchain Client:** Stellar SDK (`@stellar/stellar-sdk`)
- **Cryptography:** Native Web Crypto API / `js-sha256`

---

## 🚀 Getting Started

The dashboard is a standard Next.js web application that requires connections to both the off-chain database and the Stellar RPC node.

### 1. Prerequisites
- Node.js (v18+)
- npm, yarn, or pnpm
- A [Supabase](https://supabase.com/) Project (sharing data with `staffpurse-app`)

### 2. Environment Setup
Create a `.env.local` file in the root directory and add your environment variables:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
NEXT_PUBLIC_STELLAR_RPC_URL=https://soroban-testnet.stellar.org
NEXT_PUBLIC_ANCHOR_CONTRACT_ID=C...
```

### 3. Run the App
Install dependencies and start the development server:
```bash
npm install
npm run dev
```
Navigate to `http://localhost:3000` to view the dashboard.

---

## 🔍 Verification Flow

The dashboard provides a "Verification Badge" component for spend records. When a record is queried:
1. It retrieves the record details and its pre-computed Merkle proof array from Supabase.
2. It queries the Soroban smart contract for the official 32-byte root anchored on that specific day.
3. It performs a client-side cryptographic hash of the record data, applies the Merkle proof, and compares the result.
4. If they match, a green **"✓ Verified on Stellar"** badge is displayed. If the contract read fails (e.g. network issues), it degrades gracefully to **"Unverifiable"**.

---

## 🏗 Architecture Reference
- Read [ARCHITECTURE.md](ARCHITECTURE.md) for data flow and structural decisions.
- Read [ARCHITECTURE_ESSENTIALS.md](ARCHITECTURE_ESSENTIALS.md) for a quick overview of critical constraints.
- Read [PRD.md](PRD.md) for product scope and targeted use cases.
