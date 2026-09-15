import React from 'react';
import { SpendRecordsTable } from '../components/SpendRecordsTable';

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Diagonal Flow Background */}
      <div className="diagonal-flow min-h-screen">
        
        {/* Hero Section - Asymmetric Layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          {/* Grid Breaking Element */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-bmoni-500 rounded-full blur-3xl opacity-20 animate-blob" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-stellar-400 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000" />
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bmoni-500/10 border border-bmoni-500/20 text-bmoni-300 text-sm font-display font-medium animate-fade-in">
                  <span className="w-2 h-2 rounded-full bg-stellar-400 animate-pulse" />
                  Cryptographic Verification Portal
                </div>
                
                {/* Title - Asymmetric Typography */}
                <div className="space-y-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight animate-slide-up">
                    <span className="text-white">Corporate Spend</span>
                    <br />
                    <span className="text-gradient">Transparency</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed animate-slide-up animation-delay-200">
                    Every corporate expense is cryptographically committed to a daily Merkle tree and anchored into an immutable Soroban smart contract on Stellar.
                  </p>
                </div>
                
                {/* CTA Buttons - Asymmetric */}
                <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
                  <button className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-bmoni-500 to-bmoni-600 text-white font-display font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-bmoni-500/30 transform hover:-translate-y-1">
                    <span className="relative z-10">Explore Records</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-bmoni-600 to-stellar-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                  <button className="px-8 py-4 rounded-2xl border border-white/10 text-white font-display font-semibold text-lg hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1">
                    View Documentation
                  </button>
                </div>
              </div>
              
              {/* Right Column - Visual Element */}
              <div className="relative hidden lg:block">
                {/* Floating Cards - Grid Breaking */}
                <div className="relative w-full h-96">
                  {/* Main Card */}
                  <div className="absolute top-0 right-0 w-80 h-64 glass-light rounded-3xl p-6 transform rotate-2 hover:rotate-0 transition-all duration-500 animate-float">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-stellar-400 to-stellar-500 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-display font-semibold">Daily Anchoring</p>
                        <p className="text-gray-400 text-sm">00:05 UTC</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-stellar-400 to-bmoni-500 w-3/4 animate-pulse" />
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Batch 142</span>
                        <span>100% Verified</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Secondary Card */}
                  <div className="absolute bottom-10 left-0 w-64 h-48 glass-light rounded-3xl p-6 transform -rotate-3 hover:rotate-0 transition-all duration-500 animate-float animation-delay-2000">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bmoni-500 to-bmoni-600 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-display font-semibold">Zero PII</p>
                        <p className="text-gray-400 text-sm">SHA-256 Hashes</p>
                      </div>
                    </div>
                    <div className="font-mono text-xs text-bmoni-300 bg-black/30 rounded-xl p-3">
                      0x7a8b...9c0d
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float animation-delay-4000">
                    <div className="px-6 py-3 rounded-full bg-gradient-to-r from-bmoni-500/20 to-stellar-400/20 border border-white/10 backdrop-blur-sm">
                      <span className="text-white font-display font-semibold">Stellar Soroban</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Section - Breaking Grid */}
      <div className="relative z-20 -mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="asymmetric-card bg-dark-900/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover-glow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-bmoni-500 to-bmoni-600 flex items-center justify-center shadow-lg shadow-bmoni-500/30">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-display font-medium text-gray-400">Total Batches</p>
                <p className="text-3xl font-display font-bold text-white">142</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">Daily cadence (00:05 UTC)</p>
          </div>
          
          <div className="asymmetric-card bg-dark-900/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover-glow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-stellar-400 to-stellar-500 flex items-center justify-center shadow-lg shadow-stellar-400/30">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-display font-medium text-gray-400">Network Integrity</p>
                <p className="text-3xl font-display font-bold text-stellar-400">100%</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">Stellar Soroban Testnet</p>
          </div>
          
          <div className="asymmetric-card bg-dark-900/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover-glow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-dark-600 to-dark-700 flex items-center justify-center shadow-lg shadow-dark-600/30">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-display font-medium text-gray-400">Privacy Standard</p>
                <p className="text-3xl font-display font-bold text-white">Zero PII</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">SHA-256 leaf hashes only</p>
          </div>
        </div>
      </div>

      {/* Spend Records Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-display font-bold text-white">Daily Spend Audit Feed</h2>
            <p className="text-gray-400 mt-1">Real-time verification of corporate expenses</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-stellar-400 animate-pulse" />
            <span className="text-sm text-gray-400 font-display">Live</span>
          </div>
        </div>
        <SpendRecordsTable />
      </div>
    </div>
  );
}