import React from 'react';
import { SpendRecordsTable } from '../components/SpendRecordsTable';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Hero Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          Corporate Spend Transparency Dashboard
        </h1>
        <p className="mt-2 text-sm text-slate-600 max-w-3xl">
          Every corporate expense disbursed through StaffPurse is cryptographically committed to a daily Merkle tree
          and anchored into an immutable Soroban smart contract on the Stellar network. Inspect transactions below to
          verify cryptographic provenance without compromising privacy.
        </p>
      </div>

      {/* Metrics Summary Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Batches Anchored</div>
          <div className="mt-1 text-2xl font-bold text-slate-900">142</div>
          <div className="mt-1 text-xs text-emerald-600">Daily cadence (00:05 UTC)</div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Network Integrity</div>
          <div className="mt-1 text-2xl font-bold text-emerald-600">100% Verified</div>
          <div className="mt-1 text-xs text-slate-500">Stellar Soroban Testnet</div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Privacy Standard</div>
          <div className="mt-1 text-2xl font-bold text-slate-900">Zero PII</div>
          <div className="mt-1 text-xs text-slate-500">SHA-256 leaf hashes only</div>
        </div>
      </div>

      {/* Verification Records Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Daily Spend Audit Feed</h2>
        </div>
        <SpendRecordsTable />
      </div>
    </div>
  );
}
