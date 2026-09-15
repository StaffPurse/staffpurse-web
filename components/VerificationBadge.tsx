'use client';

import React from 'react';
import { getExplorerTxUrl } from '../utils/explorer';

export type VerificationStatus = 'verified' | 'pending' | 'invalid' | 'loading';

export interface VerificationBadgeProps {
  status: VerificationStatus;
  txHash?: string;
  className?: string;
}

export const ExternalLinkIcon = ({ className = "w-3 h-3" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export const VerificationBadge: React.FC<VerificationBadgeProps> = ({
  status,
  txHash,
  className = '',
}) => {
  const badgeContent = () => {
    switch (status) {
      case 'verified':
        return (
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display font-semibold bg-stellar-400/20 text-stellar-400 border border-stellar-400/30 hover-glow transition-all ${className}`}>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Verified on Stellar
            {txHash && <ExternalLinkIcon className="w-3 h-3 ml-0.5 opacity-70" />}
          </span>
        );
      case 'pending':
        return (
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30 ${className}`}>
            <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Pending Batch Anchor
          </span>
        );
      case 'invalid':
        return (
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display font-semibold bg-rose-500/20 text-rose-400 border border-rose-500/30 ${className}`}>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Proof Mismatch
          </span>
        );
      case 'loading':
      default:
        return (
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display font-medium bg-dark-700/50 text-gray-400 border border-white/10 ${className}`}>
            <span className="w-2 h-2 rounded-full bg-bmoni-500 animate-pulse" />
            Verifying...
          </span>
        );
    }
  };

  if (txHash && status === 'verified') {
    return (
      <a
        href={getExplorerTxUrl(txHash)}
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