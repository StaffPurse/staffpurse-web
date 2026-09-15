import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'StaffPurse — Spend Verification Dashboard',
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
      <body className="min-h-screen bg-surface-0 text-zinc-100 flex flex-col font-sans">
        <header className="sticky top-0 z-50 bg-surface-0/80 backdrop-blur-md border-b border-zinc-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-bmoni-500 flex items-center justify-center text-white font-bold text-sm">
                S
              </div>
              <span className="font-semibold text-sm tracking-tight">StaffPurse</span>
            </Link>

            <nav className="flex items-center gap-6">
              <Link href="/docs" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                Docs
              </Link>
              <a
                href="https://github.com/StaffPurse"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors hidden sm:inline"
              >
                GitHub
              </a>
              <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Testnet
              </span>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-zinc-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-bmoni-500 flex items-center justify-center text-white font-bold text-[10px]">S</div>
              <span>StaffPurse</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/docs" className="hover:text-zinc-300 transition-colors">Docs</Link>
              <a href="https://stellar.org" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">Stellar</a>
              <a href="https://github.com/StaffPurse" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">GitHub</a>
            </div>
            <span>&copy; {new Date().getFullYear()} StaffPurse</span>
          </div>
        </footer>
      </body>
    </html>
  );
}