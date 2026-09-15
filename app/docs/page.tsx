import React from 'react';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row gap-10">
      {/* Sidebar */}
      <aside className="w-full md:w-56 flex-shrink-0">
        <div className="sticky top-20 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-bmoni-500 flex items-center justify-center text-white font-bold text-[10px]">S</div>
            <span className="text-sm font-semibold">Docs</span>
          </div>

          <div>
            <h3 className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider mb-2">Overview</h3>
            <ul className="space-y-1">
              <li><a href="#vision" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors py-1 block">Vision</a></li>
              <li><a href="#architecture" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors py-1 block">Architecture</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider mb-2">Repositories</h3>
            <ul className="space-y-1">
              <li><a href="#contracts" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors py-1 block">Contracts</a></li>
              <li><a href="#app" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors py-1 block">App</a></li>
              <li><a href="#web" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors py-1 block">Web</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider mb-2">Links</h3>
            <ul className="space-y-1">
              <li><a href="https://github.com/StaffPurse" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors py-1 block">GitHub ↗</a></li>
              <li><a href="https://stellar.org" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors py-1 block">Stellar ↗</a></li>
            </ul>
          </div>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 min-w-0">
        {/* Hero */}
        <div className="bg-surface-1 border border-zinc-800 rounded-xl px-8 py-12 mb-10">
          <span className="text-[11px] font-medium text-bmoni-400 uppercase tracking-wider">Documentation</span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-4">
            StaffPurse Transparency Protocol
          </h1>
          <p className="text-zinc-400 max-w-xl leading-relaxed">
            A corporate spend management ecosystem using Stellar Soroban smart contracts
            to provide immutable, cryptographic proof of expenses.
          </p>
        </div>

        <div className="prose prose-invert prose-zinc max-w-none prose-headings:scroll-mt-20">
          {/* Vision */}
          <section id="vision" className="mb-12">
            <h2 className="text-xl font-bold border-b border-zinc-800 pb-3 mb-4">Vision</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Corporate spend management is historically opaque. Auditors rely on trusting internal databases.
              StaffPurse changes this by hashing daily expense records into a Merkle tree and anchoring the root
              on the Stellar blockchain — proving records have never been tampered with.
            </p>
            <div className="bg-surface-1 border border-zinc-800 rounded-lg p-4 text-sm">
              <p className="font-medium text-zinc-200 mb-1">Drips Wave Program</p>
              <p className="text-zinc-400">
                StaffPurse is built in alignment with the Drips Wave program, pushing boundaries
                of Soroban smart contracts and seamless Web3 UX.
              </p>
            </div>
          </section>

          {/* Architecture */}
          <section id="architecture" className="mb-12">
            <h2 className="text-xl font-bold border-b border-zinc-800 pb-3 mb-4">Architecture</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Three repositories with clean separation of concerns:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose">
              <div className="bg-surface-1 border border-zinc-800 rounded-lg p-4">
                <div className="w-8 h-8 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-sm mb-1">Contracts</h4>
                <p className="text-xs text-zinc-500">Rust/Soroban smart contracts storing Merkle roots on Stellar.</p>
              </div>
              <div className="bg-surface-1 border border-zinc-800 rounded-lg p-4">
                <div className="w-8 h-8 rounded bg-bmoni-500/10 text-bmoni-400 flex items-center justify-center mb-3">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-sm mb-1">App</h4>
                <p className="text-xs text-zinc-500">Flutter mobile client and Deno Edge functions for batching.</p>
              </div>
              <div className="bg-surface-1 border border-zinc-800 rounded-lg p-4">
                <div className="w-8 h-8 rounded bg-zinc-700 text-zinc-300 flex items-center justify-center mb-3">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-sm mb-1">Web</h4>
                <p className="text-xs text-zinc-500">Next.js public verification dashboard.</p>
              </div>
            </div>
          </section>

          {/* Contracts */}
          <section id="contracts" className="mb-12">
            <h2 className="text-xl font-bold border-b border-zinc-800 pb-3 mb-4">staffpurse-contracts</h2>
            <div className="not-prose bg-surface-1 text-zinc-400 p-3 rounded-lg font-mono text-xs mb-4 border border-zinc-800">
              github.com/StaffPurse/staffpurse-contracts
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The source of truth. A Rust <code className="text-bmoni-400 bg-surface-2 px-1.5 py-0.5 rounded text-xs">StaffPurseAnchor</code> contract
              deployed to Soroban.
            </p>
            <h3 className="text-base font-semibold mt-6 mb-3">Core Functions</h3>
            <ul className="text-zinc-400 text-sm space-y-2 list-disc pl-5">
              <li><strong className="text-zinc-200">anchor_root(batch_date, root_hash)</strong> — admin-only write</li>
              <li><strong className="text-zinc-200">get_root(batch_date)</strong> — public read for verification</li>
              <li>WASM upgrade pathways for future features</li>
            </ul>
          </section>

          {/* App */}
          <section id="app" className="mb-12">
            <h2 className="text-xl font-bold border-b border-zinc-800 pb-3 mb-4">staffpurse-app</h2>
            <div className="not-prose bg-surface-1 text-zinc-400 p-3 rounded-lg font-mono text-xs mb-4 border border-zinc-800">
              github.com/StaffPurse/staffpurse-app
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Flutter mobile app + Supabase backend + Deno Edge Functions for the daily anchoring pipeline.
            </p>
            <h3 className="text-base font-semibold mt-6 mb-3">Pipeline</h3>
            <ol className="text-zinc-400 text-sm space-y-2 list-decimal pl-5">
              <li>Employees submit expenses via the Flutter app</li>
              <li>At 00:05 UTC, pg_cron triggers the <code className="text-bmoni-400 bg-surface-2 px-1.5 py-0.5 rounded text-xs">anchor-batch</code> function</li>
              <li>Merkle tree built from un-anchored records (SHA-256 leaves)</li>
              <li>Root submitted to Soroban via Stellar RPC</li>
              <li>Records updated with Merkle inclusion proofs</li>
            </ol>
          </section>

          {/* Web */}
          <section id="web" className="mb-12">
            <h2 className="text-xl font-bold border-b border-zinc-800 pb-3 mb-4">staffpurse-web</h2>
            <div className="not-prose bg-surface-1 text-zinc-400 p-3 rounded-lg font-mono text-xs mb-4 border border-zinc-800">
              github.com/StaffPurse/staffpurse-web
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Next.js + Tailwind CSS, deployed to GitHub Pages. All cryptography runs in the browser.
            </p>
            <div className="not-prose mt-4 mb-6">
              <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-bmoni-500 text-white text-sm font-medium rounded-lg hover:bg-bmoni-600 transition-colors">
                View Dashboard
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <h3 className="text-base font-semibold mt-6 mb-3">How Verification Works</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              The dashboard fetches records via REST API, queries the Soroban contract for the daily root,
              and recomputes the root from the record hash and proof entirely in the browser.
              If it matches, a <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Verified</span> badge is shown.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}