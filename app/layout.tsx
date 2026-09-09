import type { Metadata } from 'next';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'StaffPurse — Transparency & Proof Verification Dashboard',
  description:
    'Public audit and cryptographic proof verification portal for StaffPurse corporate spend records anchored on Stellar Soroban.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased">
        <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-slate-900">StaffPurse</span>
                <span className="text-xs ml-2 px-2 py-0.5 rounded font-medium bg-blue-50 text-blue-700 border border-blue-100">
                  Verification Portal
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Stellar Testnet
              </span>
              <a
                href="https://github.com/StaffPurse"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        <footer className="bg-white border-t border-slate-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} StaffPurse. Cryptographic proofs powered by Stellar Soroban.</p>
            <div className="flex items-center gap-6">
              <a href="https://stellar.org" target="_blank" rel="noreferrer" className="hover:underline">
                Stellar Network
              </a>
              <a href="https://drips.network" target="_blank" rel="noreferrer" className="hover:underline">
                Drips Wave
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
