"use client";
import { useState, useEffect } from "react";
import { Contract, SorobanRpc, TransactionBuilder, Networks, nativeToScVal, Keypair, Account } from "@stellar/stellar-sdk";

const CONTRACT_ID =
  process.env.NEXT_PUBLIC_CONTRACT_ID ||
  "CBBIYZV3L4K5RZAO7HD76A4WHT2JGGTN7ESAGPLZ3OMCJLSCSDLQTYBJ";
const RPC_URL =
  process.env.NEXT_PUBLIC_STELLAR_RPC_URL ||
  "https://soroban-testnet.stellar.org:443";

function dateToSymbol(dateStr: string): string {
  return dateStr.replace(/-/g, "");
}

export function useContractRoot(batchDate: string | null) {
  const [root, setRoot] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!batchDate) {
      setRoot(null);
      return;
    }

    let isMounted = true;

    async function fetchRoot() {
      setIsLoading(true);
      setError(null);
      try {
        const server = new SorobanRpc.Server(RPC_URL);
        const contract = new Contract(CONTRACT_ID);
        const symbol = dateToSymbol(batchDate!);
        
        // Convert to ScVal for the contract call
        const scValSymbol = nativeToScVal(symbol, { type: "symbol" });

        // Use a dummy account for simulation
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
          // scvVoid (1) is returned if the root was not found
          // scvBytes (11) is returned if found
          if (scVal.switch().name === "scvBytes") {
            const bytes = scVal.bytes();
            const hex = Array.from(bytes)
              .map((b) => b.toString(16).padStart(2, "0"))
              .join("");
            setRoot(hex);
          } else {
            setRoot(null);
          }
        } else {
          setRoot(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : "Failed to query contract"
          );
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchRoot();
    return () => {
      isMounted = false;
    };
  }, [batchDate]);

  return { root, isLoading, error };
}
