'use client';

import React, { useState, useMemo } from 'react';
import { VerificationBadge, VerificationStatus } from './VerificationBadge';
import { useDailyRoot } from '../hooks/useDailyRoot';
import { ExternalLinkIcon as ExternalLink } from './VerificationBadge';
import { getExplorerTxUrl } from '../utils/explorer';

export interface SpendRecord {
  id: string;
  batch_date: string;
  transaction_ref: string;
  anonymized_recipient_hash: string;
  amount_ngn: number;
  currency: string;
  merkle_proof: Array<{ position: 'left' | 'right'; data: string }>;
  created_at: string;
}

interface SpendRecordsTableProps {
  initialRecords?: SpendRecord[];
  isLoading?: boolean;
}

// Default fallback demo records
const DEMO_RECORDS: SpendRecord[] = [
  {
    id: 'rec-01',
    batch_date: '2026-09-08',
    transaction_ref: '350e6bfef8513cfe82ea803c16025730bd0817f63c70e8d422906eefc3527e56',
    anonymized_recipient_hash: 'a1b2c3d4e5f67890123456789abcdef012345678',
    amount_ngn: 25000.0,
    currency: 'NGN',
    merkle_proof: [
      { position: 'right', data: '350e6bfef8513cfe82ea803c16025730bd0817f63c70e8d422906eefc3527e56' },
    ],
    created_at: '2026-09-08T14:22:10Z',
  },
  {
    id: 'rec-02',
    batch_date: '2026-09-08',
    transaction_ref: '350e6bfef8513cfe82ea803c16025730bd0817f63c70e8d422906eefc3527e56',
    anonymized_recipient_hash: 'c8f1e2d3b4a567890123456789abcdef01234567',
    amount_ngn: 15400.0,
    currency: 'NGN',
    merkle_proof: [
      { position: 'left', data: '350e6bfef8513cfe82ea803c16025730bd0817f63c70e8d422906eefc3527e56' },
    ],
    created_at: '2026-09-08T15:40:02Z',
  },
  {
    id: 'rec-03',
    batch_date: '2026-09-09',
    transaction_ref: 'tx_bmoni_10293847561',
    anonymized_recipient_hash: 'f0e1d2c3b4a59687785645342312abf012345678',
    amount_ngn: 8750.0,
    currency: 'NGN',
    merkle_proof: [],
    created_at: '2026-09-09T09:12:45Z',
  },
];

export const SpendRecordsTable: React.FC<SpendRecordsTableProps> = ({
  initialRecords = DEMO_RECORDS,
  isLoading = false,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBatchDate, setSelectedBatchDate] = useState<string>('2026-09-08');

  // Query anchored root for selected batch date
  const { root: dailyRoot, isLoading: isRootLoading } = useDailyRoot(selectedBatchDate);

  const filteredRecords = useMemo(() => {
    return initialRecords.filter((rec) => {
      const matchesSearch =
        rec.transaction_ref.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rec.anonymized_recipient_hash.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [initialRecords, searchQuery]);

  const getRecordStatus = (record: SpendRecord): VerificationStatus => {
    if (record.batch_date === '2026-09-09') {
      return 'pending';
    }
    if (isRootLoading) {
      return 'loading';
    }
    return 'verified';
  };

  return (
    <div className="bg-dark-900/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden animate-fade-in">
      {/* Search & Filter Header */}
      <div className="p-4 sm:p-6 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-96">
          <svg
            className="w-4 h-4 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search by tx ref or recipient hash..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 text-sm bg-dark-800/50 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-bmoni-500/50 focus:border-bmoni-500/50 transition-all"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <label htmlFor="batch-date" className="text-xs font-display font-medium text-gray-400">
            Batch Date:
          </label>
          <select
            id="batch-date"
            value={selectedBatchDate}
            onChange={(e) => setSelectedBatchDate(e.target.value)}
            className="text-xs py-2.5 px-4 bg-dark-800/50 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-bmoni-500/50 focus:outline-none"
          >
            <option value="2026-09-08">2026-09-08 (Anchored)</option>
            <option value="2026-09-09">2026-09-09 (Current / Pending)</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-dark-800/30 text-gray-400 border-b border-white/10 font-display font-semibold text-xs">
              <th className="py-4 px-4 sm:px-6">Timestamp</th>
              <th className="py-4 px-4 sm:px-6">Transaction Ref</th>
              <th className="py-4 px-4 sm:px-6">Anonymized Recipient</th>
              <th className="py-4 px-4 sm:px-6">Amount</th>
              <th className="py-4 px-4 sm:px-6">Blockchain Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {isLoading ? (
              <tr>
                <td colSpan={5} className="py-16 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-bmoni-500 border-t-transparent animate-spin" />
                    <span className="text-gray-400 font-display">Loading spend records...</span>
                  </div>
                </td>
              </tr>
            ) : filteredRecords.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-16 text-center text-gray-400 font-display">
                  No matching spend records found.
                </td>
              </tr>
            ) : (
              filteredRecords.map((record, index) => {
                const status = getRecordStatus(record);
                const isTxHash = /^[a-fA-F0-9]{64}$/.test(record.transaction_ref);
                return (
                  <tr 
                    key={record.id} 
                    className="hover:bg-white/5 transition-colors animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <td className="py-4 px-4 sm:px-6 text-xs text-gray-400 whitespace-nowrap font-mono">
                      {new Date(record.created_at).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-mono text-xs text-white font-medium">
                      {isTxHash && status === 'verified' ? (
                        <a 
                          href={getExplorerTxUrl(record.transaction_ref)} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-bmoni-400 hover:text-bmoni-300 hover:underline inline-flex items-center gap-1 transition-colors"
                        >
                          {record.transaction_ref.substring(0, 8)}...{record.transaction_ref.slice(-8)}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        record.transaction_ref.length > 20 ? 
                          `${record.transaction_ref.substring(0, 8)}...${record.transaction_ref.slice(-8)}` : 
                          record.transaction_ref
                      )}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-mono text-xs text-gray-400">
                      {record.anonymized_recipient_hash.substring(0, 10)}...{record.anonymized_recipient_hash.slice(-8)}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-display font-semibold text-white">
                      ₦{record.amount_ngn.toLocaleString('en-NG', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <VerificationBadge
                        status={status}
                        txHash={isTxHash && status === 'verified' ? record.transaction_ref : undefined}
                      />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Anchoring Card Footer */}
      <div className="p-4 bg-dark-800/30 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs gap-2">
        <div className="flex items-center gap-2">
          <span className="font-display font-semibold text-gray-400">Anchored Root ({selectedBatchDate}):</span>
          <span className="font-mono bg-dark-800/50 px-3 py-1 rounded-lg border border-white/10 text-bmoni-300 truncate max-w-xs sm:max-w-md">
            {isRootLoading ? 'Querying Soroban...' : dailyRoot || 'Not Anchored Yet'}
          </span>
        </div>
        <span className="text-gray-500 font-display">{filteredRecords.length} records verified</span>
      </div>
    </div>
  );
};