import React from 'react';
import { SpendRecordsTable } from '../components/SpendRecordsTable';
import { FAQSection } from '../components/FAQSection';

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Spend Verification Dashboard</h1>
        <p className="mt-1 text-sm text-zinc-400 max-w-2xl">
          Every corporate expense is cryptographically committed to a daily Merkle tree
          and anchored on Stellar. Verify any record against the on-chain root.
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-surface-1 border border-zinc-800 rounded-xl p-5">
          <p className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Batches Anchored</p>
          <p className="mt-2 text-2xl font-bold">142</p>
          <p className="mt-1 text-xs text-zinc-500">Daily at 00:05 UTC</p>
        </div>
        <div className="bg-surface-1 border border-zinc-800 rounded-xl p-5">
          <p className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Network Integrity</p>
          <p className="mt-2 text-2xl font-bold text-emerald-400">100%</p>
          <p className="mt-1 text-xs text-zinc-500">Stellar Soroban Testnet</p>
        </div>
        <div className="bg-surface-1 border border-zinc-800 rounded-xl p-5">
          <p className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Privacy</p>
          <p className="mt-2 text-2xl font-bold">Zero PII</p>
          <p className="mt-1 text-xs text-zinc-500">SHA-256 leaf hashes only</p>
        </div>
      </div>

      {/* Table */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold">Audit Feed</h2>
          <span className="flex items-center gap-1.5 text-xs text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Live
          </span>
        </div>
        <SpendRecordsTable />
      </div>

      {/* FAQ */}
      <FAQSection />
    </div>
  );
}