import React from 'react';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12">
        
        {/* Sticky Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Overview</h3>
              <ul className="space-y-2">
                <li><a href="#vision" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Vision & Mission</a></li>
                <li><a href="#architecture" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">System Architecture</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Repositories</h3>
              <ul className="space-y-2">
                <li><a href="#contracts" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Contracts (Soroban)</a></li>
                <li><a href="#app" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">App (Mobile & Edge)</a></li>
                <li><a href="#web" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Web (Dashboard)</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com/StaffPurse" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 font-medium flex items-center gap-1 transition-colors">GitHub Org ↗</a></li>
                <li><a href="https://stellar.org" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 font-medium flex items-center gap-1 transition-colors">Stellar Network ↗</a></li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          
          {/* Web3 Hero Section */}
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 sm:px-12 sm:py-20 mb-16 shadow-2xl border border-slate-800">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            
            <div className="relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide uppercase mb-6">
                Official Documentation
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
                StaffPurse <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Transparency Protocol
                </span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                A decentralized corporate spend management ecosystem. We leverage the Stellar network and Soroban smart contracts to provide immutable, cryptographic proof of corporate expenses—without exposing sensitive PII.
              </p>
            </div>
          </div>

          <div className="prose prose-slate prose-blue max-w-none">
            
            <section id="vision" className="scroll-mt-24 mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-4 mb-6">Vision & Mission</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Corporate spend management is historically opaque. Employees submit receipts into centralized black boxes, and external auditors rely entirely on trusting the corporation&apos;s internal database records. 
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                <strong>StaffPurse changes this paradigm.</strong> By cryptographically hashing daily expense records into a Merkle Tree and anchoring the root on the Stellar blockchain, we prove that historical records have never been tampered with. We enable zero-knowledge auditability for compliance officers while keeping employee names and exact receipt images off-chain and perfectly private.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-8">
                <h4 className="text-blue-900 font-semibold mb-2 m-0">The Drips Wave</h4>
                <p className="text-blue-800 m-0 text-sm">
                  StaffPurse is built in alignment with the Drips Wave program, pushing the boundaries of what is possible with Soroban smart contracts, edge compute, and seamless Web3 UX.
                </p>
              </div>
            </section>

            <section id="architecture" className="scroll-mt-24 mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-4 mb-6">System Architecture</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The StaffPurse ecosystem is separated into three distinct, highly optimized repositories to ensure a clean separation of concerns between on-chain consensus, backend coordination, and public verification.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">1. Soroban Contracts</h4>
                  <p className="text-sm text-slate-600">Rust-based smart contracts that store immutable 32-byte Merkle roots on the Stellar testnet.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">2. Mobile & Edge App</h4>
                  <p className="text-sm text-slate-600">Flutter mobile client for employees and Deno Edge functions for Merkle tree batching.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">3. Web Dashboard</h4>
                  <p className="text-sm text-slate-600">Next.js public portal for auditors to verify cryptographic inclusion proofs instantly.</p>
                </div>
              </div>
            </section>

            <section id="contracts" className="scroll-mt-24 mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-4 mb-6">Repository: staffpurse-contracts</h2>
              <div className="bg-slate-900 text-slate-300 p-6 rounded-xl mb-6 font-mono text-sm">
                github.com/StaffPurse/staffpurse-contracts
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                The absolute source of truth for the StaffPurse ecosystem. Written in Rust and deployed to the Stellar Soroban environment, this repository contains the <code>StaffPurseAnchor</code> contract.
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Core Functionality</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>State Initialization:</strong> The contract is initialized with a trusted <code>admin</code> (the StaffPurse Edge Function wallet address).</li>
                <li><strong>Root Anchoring:</strong> Only the authorized admin can call <code>anchor_root(batch_date, root_hash)</code>. This stores the 32-byte Merkle root in the contract&apos;s <code>Persistent</code> storage mapped by date.</li>
                <li><strong>Public Querying:</strong> Anyone can call <code>get_root(batch_date)</code> to retrieve the historical root for auditing without needing authorization.</li>
                <li><strong>WASM Upgrades:</strong> Built-in upgrade pathways allow the admin to swap out the WASM logic for future features.</li>
              </ul>
            </section>

            <section id="app" className="scroll-mt-24 mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-4 mb-6">Repository: staffpurse-app</h2>
              <div className="bg-slate-900 text-slate-300 p-6 rounded-xl mb-6 font-mono text-sm">
                github.com/StaffPurse/staffpurse-app
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                The backend engine and employee-facing interface. This repository houses the Flutter mobile application, the Supabase PostgreSQL database schema, and the mission-critical Deno Edge functions.
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The Batching Pipeline</h3>
              <ol className="list-decimal pl-6 space-y-4 text-slate-700">
                <li><strong>Data Entry:</strong> Employees submit expenses via the Flutter app. Data is stored in Supabase with RLS (Row Level Security).</li>
                <li><strong>Daily Cron Job:</strong> At 00:05 UTC, pg_cron triggers the <code>anchor-batch</code> Edge Function.</li>
                <li><strong>Merkle Tree Generation:</strong> The Deno function selects all un-anchored records, computes their SHA-256 leaves, and generates a Merkle Tree using OpenZeppelin&apos;s standard.</li>
                <li><strong>On-Chain Submission:</strong> The function signs a Soroban transaction with the generated root and submits it to the Stellar RPC.</li>
                <li><strong>Database Update:</strong> Upon successful anchoring, the individual records are updated in the database with their respective Merkle inclusion proofs (siblings).</li>
              </ol>
            </section>

            <section id="web" className="scroll-mt-24 mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-4 mb-6">Repository: staffpurse-web</h2>
              <div className="bg-slate-900 text-slate-300 p-6 rounded-xl mb-6 font-mono text-sm">
                github.com/StaffPurse/staffpurse-web
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                The public face of transparency. A blazing fast Next.js React application styled with Tailwind CSS, deployed statically to GitHub Pages.
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Auditor UX</h3>
              <p className="text-slate-700 mb-4">
                The dashboard fetches the latest spending records via a public REST API. Crucially, it then executes a live JSON-RPC call directly to the Stellar Soroban Testnet to fetch the authoritative Merkle root for that day.
              </p>
              <p className="text-slate-700 mb-4">
                All cryptography (SHA-256 hashing and Merkle proof verification) is performed entirely in the browser&apos;s JavaScript environment. If the local proof computation matches the on-chain root, a green <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Verified</span> badge is shown, granting auditors absolute mathematical certainty of the record&apos;s integrity.
              </p>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}
