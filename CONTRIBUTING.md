# Contributing

Thank you for your interest in contributing to StaffPurse Web!

## Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Set up your environment:
   - Copy `.env.example` to `.env.local` and fill in your values
   - Run `npm install`
4. Make your changes following the code quality standards below
5. Run lint: `npm run lint`
6. Submit a pull request targeting `main`

## Code Quality Standards

Before submitting a PR, ensure your code meets our quality standards:

- **Linting:** `npm run lint` must pass
- **Build:** `npm run build` must succeed
- **Types:** No TypeScript errors

## PR Guidelines

- Get assigned before starting work on an issue
- PR description must include `Closes #[issue number]`
- One logical change per PR — keep reviews focused

## Architecture

Read `ARCHITECTURE.md` before making changes to the verification flow. The dashboard bridges Supabase (off-chain records) and the Soroban contract (on-chain roots).

## Reporting Issues

Use the [Drips Wave Issue](.github/ISSUE_TEMPLATE/drips-wave-issue.md) template for bugs, features, and Drips Wave program tasks.
