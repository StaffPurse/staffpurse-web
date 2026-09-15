'use client';

import React, { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'How does verification work?',
    a: 'The dashboard fetches a spend record and its Merkle proof from Supabase, then queries the StaffPurse Soroban contract on Stellar for the daily root. It recomputes the root from the record hash and proof. If it matches the on-chain root, the record is verified.',
  },
  {
    q: 'What is a Merkle root?',
    a: 'A Merkle root is a single 32-byte hash that summarises a tree of hashed records. By anchoring this root on-chain, we prove that every record in the batch existed at that point in time and has not been modified since.',
  },
  {
    q: 'What data is stored on-chain?',
    a: 'Only the 32-byte Merkle root hash and the batch date. No employee names, receipt images, amounts, or any PII ever touch the blockchain.',
  },
  {
    q: 'When are batches anchored?',
    a: 'A daily cron job runs at 00:05 UTC. It collects all un-anchored records, builds the Merkle tree, and submits the root to the Soroban contract on Stellar testnet.',
  },
  {
    q: 'Which network is this deployed on?',
    a: 'Currently on Stellar Soroban testnet. The architecture is designed for mainnet deployment once auditing is complete.',
  },
  {
    q: 'Can I verify records without an account?',
    a: 'Yes. The dashboard is fully public. No login, wallet, or account is required to verify any record.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-base font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="border border-zinc-800 rounded-xl divide-y divide-zinc-800">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-zinc-200 hover:bg-surface-1 transition-colors"
            >
              {item.q}
              <svg
                className={`w-4 h-4 text-zinc-500 shrink-0 ml-4 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-4 text-sm text-zinc-400 leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};