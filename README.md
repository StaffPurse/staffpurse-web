<div align="center">
  <h1>StaffPurse Web</h1>
  <p><strong>Public verification dashboard for StaffPurse's Soroban-anchored spend records.</strong></p>

  <p>
    <img src="https://img.shields.io/github/actions/workflow/status/StaffPurse/staffpurse-web/ci.yml?branch=main" alt="CI Status" />
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License" />
  </p>

  <p>
    <a href="https://staffpurse.gitbook.io"><strong>Documentation</strong></a> ·
    <a href="https://t.me/+Gflo5jZStw1jMjE0"><strong>Community Telegram</strong></a>
  </p>
</div>

## The Problem

Nigeria's informal micro-businesses manage employee spending through trust and paper receipts. There is no way for a business owner to prove to an auditor or tax authority that a specific set of spend records is authentic. StaffPurse anchors daily Merkle roots to Stellar, and this dashboard lets anyone verify a record against that on-chain root.

## How Verification Works

1. Enter a record ID in the search bar.
2. The dashboard fetches the record and its Merkle proof from Supabase.
3. It queries the StaffPurse Soroban contract on Stellar testnet for the daily root.
4. It computes the expected root from the record hash and proof.
5. If the computed root matches the on-chain root, the record is verified.

No account required. No data leaves your browser.

## Architecture

- **Next.js** (React/TypeScript) with Tailwind CSS
- **`@supabase/supabase-js`** for off-chain record queries
- **`@stellar/stellar-sdk`** for on-chain contract queries
- **`js-sha256`** for Merkle proof verification

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase and Stellar values

# Run development server
npm run dev
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Required |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Required |
| `NEXT_PUBLIC_CONTRACT_ID` | StaffPurse Soroban contract ID | `CBBIYZV3L4K5RZAO7HD76A4WHT2JGGTN7ESAGPLZ3OMCJLSCSDLQTYBJ` |
| `NEXT_PUBLIC_STELLAR_RPC_URL` | Stellar Soroban RPC endpoint | `https://soroban-testnet.stellar.org:443` |

## Contributing

Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Security Policy](SECURITY.md) before submitting pull requests. All PRs must pass the CI gates and follow our code quality standards.

## Contributors

<a href="https://github.com/StaffPurse/staffpurse-web/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=StaffPurse/staffpurse-web&v=1" alt="Contributors" />
</a>
