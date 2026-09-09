'use client';

import { useState, useEffect } from 'react';

export interface UseDailyRootResult {
  root: string | null;
  isLoading: boolean;
  error: string | null;
}

// In-memory cache for daily roots to avoid redundant RPC queries
const rootCache = new Map<string, string>();

/**
 * Hook to query the anchored Merkle root for a given date from the Soroban smart contract.
 *
 * @param batchDate - Date in 'YYYY-MM-DD' format (e.g. '2026-09-09')
 */
export function useDailyRoot(batchDate: string | null): UseDailyRootResult {
  const [root, setRoot] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!batchDate) {
      setRoot(null);
      setIsLoading(false);
      return;
    }

    if (rootCache.has(batchDate)) {
      setRoot(rootCache.get(batchDate)!);
      setIsLoading(false);
      return;
    }

    let isMounted = true;
    setIsLoading(true);
    setError(null);

    async function fetchRoot() {
      try {
        const rpcUrl = process.env.NEXT_PUBLIC_SOROBAN_RPC_URL || 'https://soroban-testnet.stellar.org';
        const contractId = process.env.NEXT_PUBLIC_ANCHOR_CONTRACT_ID;

        // Offline / Mock mode fallback
        if (process.env.NEXT_PUBLIC_USE_MOCKS === 'true' || !contractId) {
          // Synthetic deterministic hash for demonstration/development
          const mockRoot = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
          if (isMounted) {
            rootCache.set(batchDate, mockRoot);
            setRoot(mockRoot);
            setIsLoading(false);
          }
          return;
        }

        // Production RPC query via JSON-RPC
        const response = await fetch(rpcUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0',
            id: 1,
            method: 'getContractData',
            params: {
              contractId: contractId,
              key: batchDate,
              durability: 'persistent',
            },
          }),
        });

        if (!response.ok) {
          throw new Error(`Soroban RPC returned HTTP ${response.status}`);
        }

        const data = await response.json();
        const rootHex = data.result?.val || null;

        if (isMounted) {
          if (rootHex) {
            rootCache.set(batchDate, rootHex);
          }
          setRoot(rootHex);
          setIsLoading(false);
        }
      } catch (err: any) {
        if (isMounted) {
          console.error(`[useDailyRoot] Error fetching root for ${batchDate}:`, err);
          setError(err.message || 'Failed to fetch daily root from Soroban RPC');
          setIsLoading(false);
        }
      }
    }

    fetchRoot();

    return () => {
      isMounted = false;
    };
  }, [batchDate]);

  return { root, isLoading, error };
}
