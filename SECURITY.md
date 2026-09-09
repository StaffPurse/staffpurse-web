# Security Policy

## Threat Model & Security Properties

`staffpurse-web` serves as the public audit and verification portal for corporate spend records anchored on Stellar Soroban. For architectural details, consult [ARCHITECTURE.md](ARCHITECTURE.md) and [PRD.md](PRD.md).

## Supported Versions

Only the latest `main` branch and active releases are supported with security patches.

| Version | Supported |
| ------- | --------- |
| `main` (`v0.1.x`) | :white_check_mark: |
| `< 0.1.0` | :x: |

## Reporting a Vulnerability

If you discover a security vulnerability in the web verification dashboard, **do not report it publicly** via GitHub issues, PRs, or public channels.

### Preferred Reporting Channel
Submit a private report via **[GitHub Private Vulnerability Reporting](https://github.com/StaffPurse/staffpurse-web/security/advisories/new)** directly to the maintainers.

### Secondary Contact
If private reporting is unavailable, reach out privately:
- **Telegram:** Maintainers direct contact in [StaffPurse Group](https://t.me/+Gflo5jZStw1jMjE0)
- **Discord:** Direct message core maintainers in [StaffPurse Server](https://discord.gg/5aprtMSyR)

## Scope

### In-Scope
- Next.js web application frontend and API route vulnerabilities (XSS, CSRF, SSR injection).
- Client-side cryptographic Merkle proof verification logic (`verifyProof`).
- Supabase public data querying security (ensuring no sensitive un-hashed PII is exposed).
- Vercel deployment configurations and build headers (Content-Security-Policy, HSTS).

### Out-of-Scope
- Upstream Supabase hosted service infrastructure.
- Soroban smart contract logic (covered in [`staffpurse-contracts`](https://github.com/StaffPurse/staffpurse-contracts)).
- Mobile Flutter client (covered in [`staffpurse-app`](https://github.com/StaffPurse/staffpurse-app)).
- Stellar consensus network and public RPC node availability.

## Response SLA & Disclosure Policy

- **Initial Triage:** Maintainers will acknowledge and assess report severity within **48 hours**.
- **Status Updates:** Progress updates provided every **5 business days** during active remediation.
- **Coordinated Disclosure:** We follow a standard **90-day coordinated disclosure timeline** before public advisory release.

> [!NOTE]
> The verification dashboard is designed with public, read-only transparency in mind. No user private keys or administrative actions are handled through this web portal.
