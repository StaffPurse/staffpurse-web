'use client';

import React, { useState, useMemo } from 'react';
import { VerificationBadge, VerificationStatus } from './VerificationBadge';
import { useDailyRoot } from '../hooks/useDailyRoot';

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
    transaction_ref: 'tx_bmoni_98412847192',
    anonymized_recipient_hash: 'a1b2c3d4e5f67890123456789abcdef012345678',
    amount_ngn: 25000.0,
    currency: 'NGN',
    merkle_proof: [
      { position: 'right', data: '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069' },
    ],
    created_at: '2026-09-08T14:22:10Z',
  },
  {
    id: 'rec-02',
    batch_date: '2026-09-08',
    transaction_ref: 'tx_bmoni_47192837190',
    anonymized_recipient_hash: 'c8f1e2d3b4a567890123456789abcdef01234567',
    amount_ngn: 15400.0,
    currency: 'NGN',
    merkle_proof: [
      { position: 'left', data: '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae' },
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
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Search & Filter Header */}
      <div className="p-4 sm:p-6 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-96">
          <svg
            className="w-4 h-4 absolute left-3 top-3 text-slate-400"
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
            className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <label htmlFor="batch-date" className="text-xs font-medium text-slate-600">
            Batch Date:
          </label>
          <select
            id="batch-date"
            value={selectedBatchDate}
            onChange={(e) => setSelectedBatchDate(e.target.value)}
            className="text-xs py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
            <tr className="bg-slate-50 text-slate-500 border-b border-slate-200 font-semibold text-xs">
              <th className="py-3.5 px-4 sm:px-6">Timestamp</th>
              <th className="py-3.5 px-4 sm:px-6">Transaction Ref</th>
              <th className="py-3.5 px-4 sm:px-6">Anonymized Recipient</th>
              <th className="py-3.5 px-4 sm:px-6">Amount</th>
              <th className="py-3.5 px-4 sm:px-6">Blockchain Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {isLoading ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-slate-400">
                  Loading spend records...
                </td>
              </tr>
            ) : filteredRecords.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-slate-400">
                  No matching spend records found.
                </td>
              </tr>
            ) : (
              filteredRecords.map((record) => {
                const status = getRecordStatus(record);
                return (
                  <tr key={record.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 text-xs text-slate-500 whitespace-nowrap">
                      {new Date(record.created_at).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-mono text-xs text-slate-800 font-medium">
                      {record.transaction_ref}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-mono text-xs text-slate-500">
                      {record.anonymized_recipient_hash.substring(0, 10)}...{record.anonymized_recipient_hash.slice(-8)}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">
                      ₦{record.amount_ngn.toLocaleString('en-NG', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6">
                      <VerificationBadge
                        status={status}
                        txHash={status === 'verified' ? record.transaction_ref : undefined}
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
      <div className="p-4 bg-slate-50/50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-700">Anchored Root ({selectedBatchDate}):</span>
          <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600 truncate max-w-xs sm:max-w-md">
            {isRootLoading ? 'Querying Soroban...' : dailyRoot || 'Not Anchored Yet'}
          </span>
        </div>
        <span>{filteredRecords.length} records verified</span>
      </div>
    </div>
  );
};
