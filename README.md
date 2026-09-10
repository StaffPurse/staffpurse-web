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

## 📖 Overview

A lightweight web interface allowing third-party auditors and business owners to cryptographically verify individual transactions. It ensures that the off-chain spend records perfectly match the daily Merkle roots securely anchored on the Stellar blockchain.

## 🏗 Architecture

A **Next.js (React/TypeScript)** frontend styled with **Tailwind CSS**. It queries the off-chain Supabase database for raw records and sibling proofs, queries the on-chain Soroban contract for the true root, and performs native client-side cryptographic hash validation.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

## 🤝 Contributing

Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Security Policy](SECURITY.md) before submitting pull requests. All PRs must pass the CI gates and follow our code quality standards.

## ✨ Contributors

<a href="https://github.com/StaffPurse/staffpurse-web/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=StaffPurse/staffpurse-web&v=1" alt="Contributors" />
</a>
