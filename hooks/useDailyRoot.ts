'use client';

import { useState, useEffect } from 'react';
import { Contract, SorobanRpc, TransactionBuilder, Networks, nativeToScVal, Keypair, Account } from "@stellar/stellar-sdk";

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
        const contractId = process.env.NEXT_PUBLIC_ANCHOR_CONTRACT_ID || 'CBBIYZV3L4K5RZAO7HD76A4WHT2JGGTN7ESAGPLZ3OMCJLSCSDLQTYBJ';

        // Offline / Mock mode fallback
        if (process.env.NEXT_PUBLIC_USE_MOCKS === 'true') {
          // Synthetic deterministic hash for demonstration/development
          const mockRoot = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
          if (isMounted) {
            rootCache.set(batchDate as string, mockRoot);
            setRoot(mockRoot);
            setIsLoading(false);
          }
          return;
        }

        const server = new SorobanRpc.Server(rpcUrl);
        const contract = new Contract(contractId);
        
        // Remove hyphens for symbol 'YYYYMMDD'
        const symbolStr = batchDate!.replace(/-/g, "");
        const scValSymbol = nativeToScVal(symbolStr, { type: "symbol" });

        const dummyKeypair = Keypair.random();
        const dummyAccount = new Account(dummyKeypair.publicKey(), "-1");

        const tx = new TransactionBuilder(dummyAccount, {
          fee: "100",
          networkPassphrase: Networks.TESTNET,
        })
          .addOperation(contract.call("get_root", scValSymbol))
          .setTimeout(30)
          .build();

        const result = await server.simulateTransaction(tx);

        if (!isMounted) return;

        if (
          SorobanRpc.Api.isSimulationSuccess(result) &&
          result.result &&
          result.result.retval
        ) {
          const scVal = result.result.retval;
          if (scVal.switch().name === "scvBytes") {
            const bytes = scVal.bytes();
            const rootHex = Array.from(bytes)
              .map((b) => b.toString(16).padStart(2, "0"))
              .join("");
              
            rootCache.set(batchDate as string, rootHex);
            setRoot(rootHex);
          } else {
            setRoot(null);
          }
        } else {
          setRoot(null);
        }
        setIsLoading(false);
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
