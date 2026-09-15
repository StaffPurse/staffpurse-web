import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'StaffPurse — Transparency & Proof Verification Dashboard',
  description:
    'Public audit and cryptographic proof verification portal for StaffPurse corporate spend records anchored on Stellar Soroban.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-dark-950 text-white flex flex-col antialiased">
        {/* Mesh Gradient Background */}
        <div className="fixed inset-0 mesh-gradient opacity-30 pointer-events-none" />
        
        {/* Geometric Pattern Overlay */}
        <div className="fixed inset-0 geo-pattern pointer-events-none" />
        
        {/* Header */}
        <header className="sticky top-0 z-50 glass border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            {/* Logo - Asymmetric Placement */}
            <Link href="/" className="flex items-center gap-4 group relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-bmoni-500 to-bmoni-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-bmoni-500/30 group-hover:shadow-bmoni-500/50 transition-all duration-300 transform group-hover:scale-105">
                S
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-stellar-400 rounded-full animate-pulse" />
              <div>
                <span className="text-xl font-display font-bold tracking-tight text-white group-hover:text-bmoni-300 transition-colors">
                  StaffPurse
                </span>
                <span className="text-xs ml-3 px-3 py-1 rounded-full font-medium bg-bmoni-500/20 text-bmoni-300 border border-bmoni-500/30 hidden sm:inline-block">
                  Verification Portal
                </span>
              </div>
            </Link>

            {/* Navigation - Grid Breaking Element */}
            <div className="flex items-center gap-8">
              <Link
                href="/docs"
                className="text-sm font-display font-medium text-gray-300 hover:text-bmoni-300 transition-colors relative group"
              >
                Documentation
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-bmoni-500 to-stellar-400 group-hover:w-full transition-all duration-300" />
              </Link>
              <a
                href="https://github.com/StaffPurse"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-display font-medium text-gray-300 hover:text-bmoni-300 transition-colors relative group hidden sm:inline-block"
              >
                GitHub
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-bmoni-500 to-stellar-400 group-hover:w-full transition-all duration-300" />
              </a>
              
              {/* Status Indicator - Diagonal Flow */}
              <div className="relative">
                <div className="absolute inset-0 bg-stellar-400/20 rounded-full blur-md" />
                <span className="relative inline-flex items-center gap-2 text-xs font-display font-medium text-stellar-300 bg-stellar-400/10 px-4 py-2 rounded-full border border-stellar-400/30">
                  <span className="w-2 h-2 rounded-full bg-stellar-400 animate-pulse" />
                  Stellar Testnet
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full mx-auto relative z-10">
          {children}
        </main>

        {/* Footer - Asymmetric Design */}
        <footer className="relative z-10 border-t border-white/10 mt-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-bmoni-900/20 via-transparent to-stellar-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Logo Section */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bmoni-500 to-bmoni-600 flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <div>
                  <p className="text-sm font-display font-semibold text-white">StaffPurse</p>
                  <p className="text-xs text-gray-400">Cryptographic proofs powered by Stellar Soroban</p>
                </div>
              </div>

              {/* Links - Grid Breaking Layout */}
              <div className="flex items-center gap-8">
                <Link href="/docs" className="text-sm font-display text-gray-400 hover:text-bmoni-300 transition-colors">
                  Documentation
                </Link>
                <a href="https://stellar.org" target="_blank" rel="noreferrer" className="text-sm font-display text-gray-400 hover:text-stellar-300 transition-colors">
                  Stellar Network
                </a>
                <a href="https://drips.network" target="_blank" rel="noreferrer" className="text-sm font-display text-gray-400 hover:text-bmoni-300 transition-colors">
                  Drips Wave
                </a>
              </div>

              {/* Copyright */}
              <p className="text-xs text-gray-500 font-mono">
                © {new Date().getFullYear()} StaffPurse
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}