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
    if (record.batch_date === '2026-09-09') return 'pending';
    if (isRootLoading) return 'loading';
    return 'verified';
  };

  return (
    <div className="border border-zinc-800 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="relative w-full sm:w-72">
          <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search records..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-surface-1 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="batch-date" className="text-xs text-zinc-500">Batch:</label>
          <select
            id="batch-date"
            value={selectedBatchDate}
            onChange={(e) => setSelectedBatchDate(e.target.value)}
            className="text-xs py-1.5 px-2 bg-surface-1 border border-zinc-800 rounded-lg text-zinc-300 focus:outline-none focus:border-zinc-600"
          >
            <option value="2026-09-08">2026-09-08 (Anchored)</option>
            <option value="2026-09-09">2026-09-09 (Pending)</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-800 text-xs text-zinc-500 font-medium">
              <th className="py-3 px-4">Timestamp</th>
              <th className="py-3 px-4">Transaction Ref</th>
              <th className="py-3 px-4 hidden sm:table-cell">Recipient</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/50">
            {isLoading ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-zinc-500 text-sm">
                  Loading records...
                </td>
              </tr>
            ) : filteredRecords.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-zinc-500 text-sm">
                  No matching records.
                </td>
              </tr>
            ) : (
              filteredRecords.map((record) => {
                const status = getRecordStatus(record);
                const isTxHash = /^[a-fA-F0-9]{64}$/.test(record.transaction_ref);
                return (
                  <tr key={record.id} className="hover:bg-surface-1 transition-colors">
                    <td className="py-3 px-4 text-xs text-zinc-500 whitespace-nowrap font-mono">
                      {new Date(record.created_at).toLocaleString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                    <td className="py-3 px-4 font-mono text-xs">
                      {isTxHash && status === 'verified' ? (
                        <a
                          href={getExplorerTxUrl(record.transaction_ref)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-bmoni-400 hover:text-bmoni-300 inline-flex items-center gap-1"
                        >
                          {record.transaction_ref.substring(0, 8)}...{record.transaction_ref.slice(-8)}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-zinc-300">
                          {record.transaction_ref.length > 20
                            ? `${record.transaction_ref.substring(0, 8)}...${record.transaction_ref.slice(-8)}`
                            : record.transaction_ref}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 font-mono text-xs text-zinc-500 hidden sm:table-cell">
                      {record.anonymized_recipient_hash.substring(0, 8)}...
                    </td>
                    <td className="py-3 px-4 font-medium text-sm">
                      ₦{record.amount_ngn.toLocaleString('en-NG', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-3 px-4">
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

      {/* Footer */}
      <div className="px-4 py-3 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-zinc-500 gap-2">
        <div className="flex items-center gap-2">
          <span>Root ({selectedBatchDate}):</span>
          <span className="font-mono text-zinc-400 truncate max-w-xs">
            {isRootLoading ? 'Querying...' : dailyRoot || 'Not anchored'}
          </span>
        </div>
        <span>{filteredRecords.length} records</span>
      </div>
    </div>
  );
};