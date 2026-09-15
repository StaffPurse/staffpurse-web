import React from 'react';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-dark-950 text-white selection:bg-bmoni-500/30 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12">
        
        {/* Sticky Sidebar - Glass Morphism */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bmoni-500 to-bmoni-600 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span className="font-display font-bold text-white">Docs</span>
            </div>
            
            <div>
              <h3 className="text-xs font-display font-semibold uppercase tracking-wider text-bmoni-400 mb-3">Overview</h3>
              <ul className="space-y-2">
                <li><a href="#vision" className="text-gray-400 hover:text-bmoni-300 font-display font-medium transition-colors block py-1">Vision & Mission</a></li>
                <li><a href="#architecture" className="text-gray-400 hover:text-bmoni-300 font-display font-medium transition-colors block py-1">System Architecture</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-display font-semibold uppercase tracking-wider text-bmoni-400 mb-3">Repositories</h3>
              <ul className="space-y-2">
                <li><a href="#contracts" className="text-gray-400 hover:text-bmoni-300 font-display font-medium transition-colors block py-1">Contracts (Soroban)</a></li>
                <li><a href="#app" className="text-gray-400 hover:text-bmoni-300 font-display font-medium transition-colors block py-1">App (Mobile & Edge)</a></li>
                <li><a href="#web" className="text-gray-400 hover:text-bmoni-300 font-display font-medium transition-colors block py-1">Web (Dashboard)</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-display font-semibold uppercase tracking-wider text-bmoni-400 mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com/StaffPurse" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bmoni-300 font-display font-medium flex items-center gap-1 transition-colors py-1">GitHub Org ↗</a></li>
                <li><a href="https://stellar.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bmoni-300 font-display font-medium flex items-center gap-1 transition-colors py-1">Stellar Network ↗</a></li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          
          {/* Web3 Hero Section - Mesh Gradient */}
          <div className="relative overflow-hidden rounded-3xl bg-dark-900/80 backdrop-blur-xl px-8 py-16 sm:px-12 sm:py-20 mb-16 shadow-2xl border border-white/10">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-96 h-96 bg-bmoni-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-stellar-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
            </div>
            
            {/* Noise Overlay */}
            <div className="absolute inset-0 noise-overlay" />
            
            <div className="relative z-10">
              <span className="inline-block py-2 px-4 rounded-full bg-bmoni-500/20 border border-bmoni-400/30 text-bmoni-300 text-xs font-display font-semibold tracking-wide uppercase mb-6 animate-fade-in">
                Official Documentation
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 animate-slide-up">
                <span className="text-white">StaffPurse</span>
                <br />
                <span className="text-gradient">Transparency Protocol</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed animate-slide-up animation-delay-200">
                A decentralized corporate spend management ecosystem leveraging the Stellar network and Soroban smart contracts to provide immutable, cryptographic proof of corporate expenses.
              </p>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            
            {/* Vision Section */}
            <section id="vision" className="scroll-mt-24 mb-16">
              <h2 className="text-3xl font-display font-bold tracking-tight text-white border-b border-white/10 pb-4 mb-6">
                Vision & Mission
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                Corporate spend management is historically opaque. Employees submit receipts into centralized black boxes, and external auditors rely entirely on trusting the corporation&apos;s internal database records. 
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                <strong className="text-white">StaffPurse changes this paradigm.</strong> By cryptographically hashing daily expense records into a Merkle Tree and anchoring the root on the Stellar blockchain, we prove that historical records have never been tampered with.
              </p>
              <div className="bg-bmoni-500/10 border-l-4 border-bmoni-500 p-6 rounded-r-xl my-8">
                <h4 className="text-bmoni-300 font-display font-semibold mb-2">The Drips Wave</h4>
                <p className="text-bmoni-300/80 text-sm">
                  StaffPurse is built in alignment with the Drips Wave program, pushing the boundaries of what is possible with Soroban smart contracts, edge compute, and seamless Web3 UX.
                </p>
              </div>
            </section>

            {/* Architecture Section */}
            <section id="architecture" className="scroll-mt-24 mb-16">
              <h2 className="text-3xl font-display font-bold tracking-tight text-white border-b border-white/10 pb-4 mb-6">
                System Architecture
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                The StaffPurse ecosystem is separated into three distinct, highly optimized repositories to ensure a clean separation of concerns.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
                {/* Contract Card */}
                <div className="bg-dark-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-bmoni-500/50 transition-all duration-300 hover-glow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-stellar-400 to-stellar-500 flex items-center justify-center mb-4 shadow-lg shadow-stellar-400/30">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-display font-bold text-white mb-2">1. Soroban Contracts</h4>
                  <p className="text-sm text-gray-400">Rust-based smart contracts storing immutable 32-byte Merkle roots on Stellar testnet.</p>
                </div>
                
                {/* App Card */}
                <div className="bg-dark-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-bmoni-500/50 transition-all duration-300 hover-glow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bmoni-500 to-bmoni-600 flex items-center justify-center mb-4 shadow-lg shadow-bmoni-500/30">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-display font-bold text-white mb-2">2. Mobile & Edge App</h4>
                  <p className="text-sm text-gray-400">Flutter mobile client and Deno Edge functions for Merkle tree batching.</p>
                </div>
                
                {/* Web Card */}
                <div className="bg-dark-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-bmoni-500/50 transition-all duration-300 hover-glow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-dark-600 to-dark-700 flex items-center justify-center mb-4 shadow-lg shadow-dark-600/30">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-display font-bold text-white mb-2">3. Web Dashboard</h4>
                  <p className="text-sm text-gray-400">Next.js public portal for auditors to verify cryptographic proofs instantly.</p>
                </div>
              </div>
            </section>

            {/* Contracts Repository */}
            <section id="contracts" className="scroll-mt-24 mb-16">
              <h2 className="text-3xl font-display font-bold tracking-tight text-white border-b border-white/10 pb-4 mb-6">
                Repository: staffpurse-contracts
              </h2>
              <div className="bg-dark-800 text-gray-300 p-6 rounded-2xl mb-6 font-mono text-sm border border-white/10">
                github.com/StaffPurse/staffpurse-contracts
              </div>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                The absolute source of truth for the StaffPurse ecosystem. Written in Rust and deployed to the Stellar Soroban environment, this repository contains the <code className="text-bmoni-300 bg-bmoni-500/10 px-2 py-0.5 rounded">StaffPurseAnchor</code> contract.
              </p>
              <h3 className="text-xl font-display font-bold text-white mt-8 mb-4">Core Functionality</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-400">
                <li><strong className="text-white">State Initialization:</strong> The contract is initialized with a trusted <code className="text-bmoni-300 bg-bmoni-500/10 px-2 py-0.5 rounded">admin</code> (the StaffPurse Edge Function wallet address).</li>
                <li><strong className="text-white">Root Anchoring:</strong> Only the authorized admin can call <code className="text-bmoni-300 bg-bmoni-500/10 px-2 py-0.5 rounded">anchor_root(batch_date, root_hash)</code>.</li>
                <li><strong className="text-white">Public Querying:</strong> Anyone can call <code className="text-bmoni-300 bg-bmoni-500/10 px-2 py-0.5 rounded">get_root(batch_date)</code> to retrieve the historical root.</li>
                <li><strong className="text-white">WASM Upgrades:</strong> Built-in upgrade pathways allow the admin to swap out the WASM logic.</li>
              </ul>
            </section>

            {/* App Repository */}
            <section id="app" className="scroll-mt-24 mb-16">
              <h2 className="text-3xl font-display font-bold tracking-tight text-white border-b border-white/10 pb-4 mb-6">
                Repository: staffpurse-app
              </h2>
              <div className="bg-dark-800 text-gray-300 p-6 rounded-2xl mb-6 font-mono text-sm border border-white/10">
                github.com/StaffPurse/staffpurse-app
              </div>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                The backend engine and employee-facing interface. This repository houses the Flutter mobile application, the Supabase PostgreSQL database schema, and the mission-critical Deno Edge functions.
              </p>
              <h3 className="text-xl font-display font-bold text-white mt-8 mb-4">The Batching Pipeline</h3>
              <ol className="list-decimal pl-6 space-y-4 text-gray-400">
                <li><strong className="text-white">Data Entry:</strong> Employees submit expenses via the Flutter app. Data is stored in Supabase with RLS.</li>
                <li><strong className="text-white">Daily Cron Job:</strong> At 00:05 UTC, pg_cron triggers the <code className="text-bmoni-300 bg-bmoni-500/10 px-2 py-0.5 rounded">anchor-batch</code> Edge Function.</li>
                <li><strong className="text-white">Merkle Tree Generation:</strong> The Deno function selects all un-anchored records, computes their SHA-256 leaves.</li>
                <li><strong className="text-white">On-Chain Submission:</strong> The function signs a Soroban transaction with the generated root.</li>
                <li><strong className="text-white">Database Update:</strong> Upon successful anchoring, individual records are updated with Merkle inclusion proofs.</li>
              </ol>
            </section>

            {/* Web Repository */}
            <section id="web" className="scroll-mt-24 mb-16">
              <h2 className="text-3xl font-display font-bold tracking-tight text-white border-b border-white/10 pb-4 mb-6">
                Repository: staffpurse-web
              </h2>
              <div className="bg-dark-800 text-gray-300 p-6 rounded-2xl mb-6 font-mono text-sm border border-white/10">
                github.com/StaffPurse/staffpurse-web
              </div>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                The public face of transparency. A blazing fast Next.js React application styled with Tailwind CSS, deployed statically to GitHub Pages.
              </p>
              <div className="mt-6 mb-8">
                <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-bmoni-500 to-bmoni-600 text-white font-display font-semibold rounded-xl shadow-lg shadow-bmoni-500/30 hover:shadow-xl hover:shadow-bmoni-500/40 transition-all duration-300">
                  View Live Dashboard
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <h3 className="text-xl font-display font-bold text-white mt-8 mb-4">Auditor UX</h3>
              <p className="text-gray-400 mb-4">
                The dashboard fetches the latest spending records via a public REST API. Crucially, it then executes a live JSON-RPC call directly to the Stellar Soroban Testnet to fetch the authoritative Merkle root for that day.
              </p>
              <p className="text-gray-400 mb-4">
                All cryptography (SHA-256 hashing and Merkle proof verification) is performed entirely in the browser&apos;s JavaScript environment. If the local proof computation matches the on-chain root, a green <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-stellar-400/20 text-stellar-400 border border-stellar-400/30">Verified</span> badge is shown.
              </p>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}