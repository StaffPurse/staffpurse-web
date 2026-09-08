# Architecture Essentials

**Repository**: `staffpurse-web`
**Purpose**: Read-only verification dashboard for validating off-chain spend records against on-chain Soroban Merkle roots.

### 1. Stack
- **Frontend**: Next.js, React, TypeScript, TailwindCSS.
- **Off-Chain Data**: Supabase (PostgreSQL).
- **On-Chain Data**: Soroban / Stellar (`@stellar/stellar-sdk`).

### 2. Core Mechanism (The Verification Flow)
1. **Fetch**: Get record + Merkle proof from Supabase.
2. **Query**: Get anchored daily root from Soroban contract.
3. **Compute**: Hash the record, apply the proof, and compare against the Soroban root.
4. **Display**: Render "Verified", "Pending", or "Unverifiable" (graceful degradation on RPC failure).

### 3. Critical Constraints
- **Privacy**: No PII or raw transaction data is stored on-chain. Deal *only* in hashes.
- **Resilience**: The UI must not crash if the Stellar RPC is down. Handle blockchain read failures gracefully.
