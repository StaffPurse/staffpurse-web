# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in StaffPurse Web, please report it responsibly.

**Do not open a public GitHub issue for security vulnerabilities.**

Instead, email the maintainers directly or use the [Telegram community](https://t.me/+Gflo5jZStw1jMjE0) to reach us privately.

## Scope

This security policy covers the StaffPurse Web verification dashboard. For vulnerabilities in the Soroban smart contracts, see the [staffpurse-contracts SECURITY.md](https://github.com/StaffPurse/staffpurse-contracts/blob/main/SECURITY.md).

## Response Timeline

- **Acknowledgment:** Within 48 hours of report
- **Initial assessment:** Within 1 week
- **Fix or mitigation:** Depends on severity, but we aim for 2 weeks for critical issues

## Specific Concerns

- **Verification bypass:** If you can make the dashboard show "Verified" for a record that does not match the on-chain root, that is a critical vulnerability.
- **Data leakage:** The dashboard is read-only and should never expose sensitive business data beyond what the Merkle proof reveals.
- **Dependency vulnerabilities:** Report any known vulnerabilities in `@stellar/stellar-sdk`, `@supabase/supabase-js`, or `js-sha256`.
