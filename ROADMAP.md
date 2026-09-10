# 🗺️ ROADMAP.md — `staffpurse-web`

> **Scope:** Delivering the public transparency and audit verification dashboard for StaffPurse (`staffpurse-web`), getting the repository approved into the Stellar Wave Program, and coordinating community developers through Wave cycles.
> **Note:** Wave Program does not fund StaffPurse directly; community contributors earn points by completing backlog issues.

---

## Phase 0 — Feasibility & Ecosystem Prerequisites

Pre-implementation verification of frontend data sources and RPC endpoints.

### 📋 Current Work
- [x] **Wave Program Acceptance Confirmed:** Stellar Wave Program is active.
- [x] **Architecture Topology Defined:** `Next.js Frontend` → `Supabase (Spend Records)` & `Soroban RPC (Daily Roots)`.

### 🔍 Identified Gaps & Action Items (Now Tracked in GitHub Issues)
- [x] **Issue #13 — Supabase RLS & Soroban RPC CORS Spike:** [Verify Supabase RLS anon access and Soroban RPC CORS on Testnet](https://github.com/StaffPurse/staffpurse-web/issues/13) ✅ *(Completed by @mallison031)*
- [ ] **Points Allocation Budget:** Confirm exact Wave 1 points ceiling for `staffpurse-web` on the Drips dashboard (target: ~25,000 pts).

---

## Phase 1 — Repository Readiness & Verification Dashboard

Requirements to stand up a functional, review-ready Next.js verification dashboard.

### 📋 Current Work (Tracked in GitHub Issues)
- [x] **Issue #1 — Repository Hygiene & Security:** [Add SECURITY.md and configure repository hygiene](https://github.com/StaffPurse/staffpurse-web/issues/1) ✅ *(Completed by @mallison031)*
- [x] **Issue #2 — Supabase Data Hook:** [Implement Supabase data fetching hook for spend records](https://github.com/StaffPurse/staffpurse-web/issues/2)
- [x] **Issue #3 — Soroban RPC Data Hook:** [Implement Soroban RPC data fetching hook for daily roots](https://github.com/StaffPurse/staffpurse-web/issues/3) ✅ *(Completed by @mallison031)*
- [x] **Issue #4 — Merkle Proof Validator Utility:** [Implement client-side Merkle proof validation utility](https://github.com/StaffPurse/staffpurse-web/issues/4)
- [x] **Issue #5 — Verification Badge Component:** [Build Verification Badge UI Component](https://github.com/StaffPurse/staffpurse-web/issues/5) ✅ *(Completed by @mallison031)*
- [x] **Issue #6 — Search Bar UI Component:** [Build the Search Bar UI component for record lookups](https://github.com/StaffPurse/staffpurse-web/issues/6)
- [x] **Issue #7 — Base Layout & Shell:** [Scaffold the main Next.js layout and routing structure](https://github.com/StaffPurse/staffpurse-web/issues/7) ✅ *(Completed by @mallison031)*
- [x] **Issue #8 — Vercel Deployment & CI Pipeline:** [Set up Vercel deployment configuration and CI pipeline](https://github.com/StaffPurse/staffpurse-web/issues/8)
- [x] **Issue #14 — Next.js Project Scaffolding:** [Initialize Next.js 14 project with TypeScript, Tailwind CSS, and Lucide icons](https://github.com/StaffPurse/staffpurse-web/issues/14)
- [x] **Issue #15 — Spend Records Table Component:** [Build Spend Records Table integrating verification badges, search, and Soroban proof validation](https://github.com/StaffPurse/staffpurse-web/issues/15) ✅ *(Completed by @mallison031)*
- [x] **Issue #16 — Mock Data Fixtures:** [Add mock data fixtures and offline demo mode](https://github.com/StaffPurse/staffpurse-web/issues/16)

### 🔍 Identified Gaps & Action Items
- [x] ~~**GAP-W1: Project Scaffolding (`package.json` & Toolchain)**~~ → Created as **Issue #14**
- [x] ~~**GAP-W2: Verification Table / Record List Component**~~ → Created as **Issue #15**
- [x] ~~**GAP-W3: Mock Data & Fixtures for Local Development**~~ → Created as **Issue #16**
- [ ] **GAP-W4: Stellar Block Explorer Deep Links:** Ensure `SpendRecordsTable` rows and badges link to Stellar Expert for batch transactions and contract addresses.

---

## Phase 3 — Wave Issue Backlog & Point Sizing

Preparing a production-grade issue backlog for Wave contributors.

### 📋 Current Work
- [x] Standard Drips Wave issue template created in `.github/ISSUE_TEMPLATE/drips-wave-issue.md`.
- [x] Initial Phase 1 issues (#1–#8) published with detailed requirements and checklists.

### 🔍 Identified Gaps & Action Items
- [ ] **GAP-W5: GitHub Labels Configuration:**
  - *Problem:* Repository only contains default labels (`bug`, `enhancement`).
  - *Action:* Create labels:
    - `complexity: trivial (100 pts)`
    - `complexity: medium (150 pts)`
    - `complexity: high (200 pts)`
    - `wave-1`
- [ ] **GAP-W6: Issue Sizing & Point Assignment:**
  - *Problem:* Existing issues lack explicit point metadata.
  - *Action:* Tag open issues:
    - `#1` Repo Hygiene → Trivial (100 pts)
    - `#2` Supabase Data Hook → Medium (150 pts)
    - `#3` Soroban RPC Hook → Medium (150 pts)
    - `#4` Merkle Proof Utility → Medium (150 pts)
    - `#5` Verification Badge UI → Trivial (100 pts)
    - `#6` Search Bar UI → Trivial (100 pts)
    - `#7` Next.js Layout Shell → Medium (150 pts)
    - `#8` Vercel CI Pipeline → Trivial (100 pts)
    - `GAP-W2` Verification Table → High (200 pts)
- [ ] **GAP-W7: Wave 2 Feature Backlog Seeding:**
  - *Problem:* Lack of follow-up issues for subsequent cycles.
  - *Action:* Draft Wave 2 candidate issues:
    - Date-range and organization filtering.
    - Export audit summary to PDF / CSV with cryptographic proofs.
    - Dark mode / accessible contrast auditing.

---

## Phase 4 — Wave 1 Operational Execution

Managing frontend contributors during the 1-week sprint.

### 📋 Current Work
- [x] Contact links (Telegram & Discord) added to issue guidelines.
- [x] CI checks (`npm run lint`, `npm run build`) established.

### 🔍 Identified Gaps & Action Items
- [ ] **GAP-W8: Pull Request Template (`.github/PULL_REQUEST_TEMPLATE.md`):**
  - *Problem:* No PR template requiring Vercel preview deployment links and UI component screenshots.
  - *Action:* Create PR template requiring preview URLs and responsive UI screenshots (mobile & desktop).
- [ ] **GAP-W9: Stale Assignment Reallocation:**
  - *Problem:* Contributors claiming frontend issues without delivering before the 1-week deadline.
  - *Action:* Enforce 48-hour check-in requirement; reassign issue if no draft PR is opened.
- [ ] **GAP-W10: Issue Template Placeholder Cleanup:**
  - *Problem:* `.github/ISSUE_TEMPLATE/drips-wave-issue.md` still contains placeholder strings (`[link]`, `$org/$repo`).
  - *Action:* Replace with concrete StaffPurse URLs.

---

## Phase 5 — Iteration & Wave Closeout

Post-cycle review, point distribution, and backlog maintenance.

### 📋 Current Work
- [ ] Retrospective cadence defined.

### 🔍 Identified Gaps & Action Items
- [ ] **GAP-W11: Drips Attestation Workflow:** Document review process for approving merged frontend PRs in Drips within 14 days.
- [ ] **GAP-W12: Mobile Responsive & Accessibility Audit:** Post-wave QA testing across Safari, Chrome, iOS, and Android webviews.
- [ ] **GAP-W13: Budget Reconciliation:** Sizing Wave 2 issue points based on remaining repo allocation.

---

## Open Decisions & Technical Risks
1. **SSR vs Client-side Proof Verification:** Should Merkle proof validation execute client-side in the browser or via Next.js server actions to conserve client CPU on large batches?
2. **Public RPC Reliability:** Public testnet Soroban RPC endpoints occasionally undergo maintenance resets. Need fallback RPC provider configuration (e.g., QuickNode or private RPC).
