"use client";
import React from "react";

export interface VerificationOutcome {
  status: "verified" | "not_found" | "mismatch" | "error";
  recordId?: string;
  batchDate?: string;
  contractRoot?: string | null;
  computedRoot?: string;
  message: string;
}

export const VerificationResult: React.FC<{ outcome: VerificationOutcome }> = ({
  outcome,
}) => {
  const styles = {
    verified: "border-green-500 bg-green-50 text-green-900",
    not_found: "border-yellow-500 bg-yellow-50 text-yellow-900",
    mismatch: "border-red-500 bg-red-50 text-red-900",
    error: "border-red-500 bg-red-50 text-red-900",
  };

  const icons = {
    verified: "\u2713",
    not_found: "\u2731",
    mismatch: "\u2717",
    error: "\u2717",
  };

  return (
    <div
      className={`rounded-lg border-2 p-6 ${styles[outcome.status]}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{icons[outcome.status]}</span>
        <h2 className="text-xl font-semibold">
          {outcome.status === "verified" && "Verified on Stellar"}
          {outcome.status === "not_found" && "No On-Chain Record"}
          {outcome.status === "mismatch" && "Verification Failed"}
          {outcome.status === "error" && "Verification Error"}
        </h2>
      </div>

      <p className="mb-4">{outcome.message}</p>

      {outcome.recordId && (
        <div className="text-sm space-y-1 opacity-75">
          <p>
            <strong>Record:</strong> {outcome.recordId}
          </p>
          {outcome.batchDate && (
            <p>
              <strong>Batch Date:</strong> {outcome.batchDate}
            </p>
          )}
          {outcome.contractRoot && (
            <p>
              <strong>On-Chain Root:</strong>{" "}
              <code className="break-all">{outcome.contractRoot}</code>
            </p>
          )}
          {outcome.computedRoot && (
            <p>
              <strong>Computed Root:</strong>{" "}
              <code className="break-all">{outcome.computedRoot}</code>
            </p>
          )}
        </div>
      )}
    </div>
  );
};
