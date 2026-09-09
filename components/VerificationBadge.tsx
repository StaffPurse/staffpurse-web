'use client';

import React from 'react';

export type VerificationStatus = 'verified' | 'pending' | 'invalid' | 'loading';

export interface VerificationBadgeProps {
  status: VerificationStatus;
  txHash?: string;
  className?: string;
}

export const VerificationBadge: React.FC<VerificationBadgeProps> = ({
  status,
  txHash,
  className = '',
}) => {
  const explorerBaseUrl =
    process.env.NEXT_PUBLIC_STELLAR_EXPLORER_URL || 'https://stellar.expert/explorer/testnet/tx';

  const badgeContent = () => {
    switch (status) {
      case 'verified':
        return (
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 ${className}`}>
            <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Verified on Stellar
          </span>
        );
      case 'pending':
        return (
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 ${className}`}>
            <svg className="w-3.5 h-3.5 text-amber-600 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Pending Batch Anchor
          </span>
        );
      case 'invalid':
        return (
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200 ${className}`}>
            <svg className="w-3.5 h-3.5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Proof Mismatch
          </span>
        );
      case 'loading':
      default:
        return (
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200 ${className}`}>
            <span className="w-2 h-2 rounded-full bg-slate-400 animate-ping" />
            Verifying...
          </span>
        );
    }
  };

  if (txHash && status === 'verified') {
    return (
      <a
        href={`${explorerBaseUrl}/${txHash}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Inspect on Stellar Expert"
        className="hover:opacity-90 transition-opacity"
      >
        {badgeContent()}
      </a>
    );
  }

  return badgeContent();
};
