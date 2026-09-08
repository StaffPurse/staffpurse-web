# Product Requirements Document (PRD): StaffPurse Web Verification Dashboard

## 1. Overview
StaffPurse Web is a verification dashboard that acts as the transparency layer for StaffPurse. StaffPurse is a spend control platform allowing informal micro-businesses in Nigeria to issue capped virtual cards to their staff. To ensure trust and immutability without storing sensitive data on-chain, StaffPurse anchors daily batches of transaction record hashes to the Stellar blockchain via Soroban. 
This web application provides a public or admin-facing interface to independently verify those anchored records.

## 2. Target Audience
- **Business Owners & Admins**: To audit historical spending and prove ledger integrity.
- **Third-Party Auditors / Partners**: To independently verify that transactions occurred exactly as stated in the database without being tampered with.

## 3. Core Features & Requirements
- **Record Lookup**: Users can search for or view a specific spend record.
- **Data Fetching**: The app pulls the raw record and its corresponding Merkle proof from the Supabase database.
- **Blockchain Verification**: The app fetches the daily anchored Merkle root from the `anchor_root` Soroban contract for the record's date.
- **Cryptographic Validation**: The app hashes the record data and uses the Merkle proof to check if it matches the anchored root on Stellar.
- **Verification UI (Badge Component)**: 
  - Displays a clear "✓ Verified on Stellar" badge if the proof is valid.
  - Displays a "Pending" status if the daily batch hasn't been anchored yet.
  - Degrades gracefully (shows "Unverifiable") if the Soroban RPC call fails, ensuring the site doesn't crash.

## 4. Privacy Constraints
- **Zero Raw Data On-Chain**: The system must only ever verify cryptographic hashes. No raw transaction data, employee names, or card details are ever pulled from or sent to the blockchain.
