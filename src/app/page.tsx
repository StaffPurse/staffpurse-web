"use client";
import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { VerificationResult, VerificationOutcome } from "@/components/VerificationResult";
import { useSpendRecord } from "@/hooks/useSpendRecord";
import { useContractRoot } from "@/hooks/useContractRoot";
import { verifyMerkleProof } from "@/utils/merkle";
import { sha256 } from "js-sha256";

function hashRecord(record: { id: string; amount: number; timestamp: string; employee_id: string }): string {
  const payload = `${record.id}|${record.amount}|${record.timestamp}|${record.employee_id}`;
  const bytes = new TextEncoder().encode(payload);
  return sha256.hex(bytes);
}

function extractDate(isoTimestamp: string): string {
  return isoTimestamp.split("T")[0];
}

export default function Home() {
  const [recordId, setRecordId] = useState<string | null>(null);
  const { data: record, isLoading: recordLoading, error: recordError } = useSpendRecord(recordId);
  const batchDate = record ? extractDate(record.timestamp) : null;
  const { root: contractRoot, isLoading: rootLoading, error: rootError } = useContractRoot(batchDate);

  const [outcome, setOutcome] = useState<VerificationOutcome | null>(null);

  const handleSearch = (query: string) => {
    setRecordId(query);
    setOutcome(null);
  };

  const handleVerify = () => {
    if (!record || !contractRoot) return;

    const recordHash = hashRecord({
      id: record.id,
      amount: record.amount,
      timestamp: record.timestamp,
      employee_id: record.employee_id,
    });

    const valid = verifyMerkleProof(recordHash, record.merkle_proof, contractRoot);

    setOutcome({
      status: valid ? "verified" : "mismatch",
      recordId: record.id,
      batchDate: extractDate(record.timestamp),
      contractRoot,
      computedRoot: recordHash,
      message: valid
        ? `Record ${record.id} is part of the daily batch anchored on Stellar. The Merkle proof verifies against the on-chain root for ${extractDate(record.timestamp)}.`
        : `Record ${record.id} failed verification. The computed root does not match the on-chain root for ${extractDate(record.timestamp)}. This record may have been altered or may not be part of the anchored batch.`,
    });
  };

  const handleVerifyNotFound = () => {
    if (recordId && !recordLoading && !record) {
      setOutcome({
        status: "not_found",
        recordId: recordId,
        message: `Record "${recordId}" was not found in the off-chain database. It may not have been recorded yet, or the ID may be incorrect.`,
      });
    }
  };

  const isLoading = recordLoading || rootLoading;
  const hasData = record && contractRoot;
  const hasError = recordError || rootError;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">StaffPurse Verifier</h1>
          <p className="mt-1 text-sm text-gray-500">
            Cryptographically verify spend records against the Stellar blockchain.
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-sm font-medium text-gray-700 mb-3">Look up a record</h2>
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {recordError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-red-800 text-sm">
            {recordError.message}
          </div>
        )}

        {rootError && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-yellow-800 text-sm">
            Contract query error: {rootError}
          </div>
        )}

        {record && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-sm font-medium text-gray-700 mb-3">Record details</h2>
            <dl className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-gray-500">Record ID</dt>
                <dd className="font-mono text-gray-900">{record.id}</dd>
              </div>
              <div>
                <dt className="text-gray-500">Amount</dt>
                <dd className="text-gray-900">{record.amount.toFixed(2)}</dd>
              </div>
              <div>
                <dt className="text-gray-500">Timestamp</dt>
                <dd className="text-gray-900">{record.timestamp}</dd>
              </div>
              <div>
                <dt className="text-gray-500">Employee</dt>
                <dd className="font-mono text-gray-900">{record.employee_id}</dd>
              </div>
              <div>
                <dt className="text-gray-500">Batch Date</dt>
                <dd className="text-gray-900">{extractDate(record.timestamp)}</dd>
              </div>
              <div>
                <dt className="text-gray-500">Merkle Proof</dt>
                <dd className="text-gray-900">{record.merkle_proof.length} siblings</dd>
              </div>
            </dl>

            <div className="mt-4 pt-4 border-t border-gray-100">
              {contractRoot ? (
                <p className="text-xs text-gray-500 mb-3">
                  On-chain root for {extractDate(record.timestamp)}:{" "}
                  <code className="break-all">{contractRoot}</code>
                </p>
              ) : rootLoading ? (
                <p className="text-xs text-gray-500 mb-3">Querying Stellar contract...</p>
              ) : (
                <p className="text-xs text-yellow-600 mb-3">
                  No on-chain root found for {extractDate(record.timestamp)}.
                </p>
              )}

              <button
                onClick={handleVerify}
                disabled={!hasData || isLoading}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {isLoading ? "Verifying..." : "Verify against Stellar"}
              </button>
            </div>
          </div>
        )}

        {!record && !recordLoading && recordId && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <p className="text-gray-500 text-sm">
              No record found for &quot;{recordId}&quot;.
            </p>
          </div>
        )}

        {outcome && (
          <div className="mt-6">
            <VerificationResult outcome={outcome} />
          </div>
        )}
      </main>
    </div>
  );
}
