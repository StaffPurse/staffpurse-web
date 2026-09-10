export const getExplorerTxUrl = (txHash: string): string => {
  const baseUrl = process.env.NEXT_PUBLIC_STELLAR_EXPLORER_URL || 'https://stellar.expert/explorer/testnet/tx';
  return `${baseUrl}/${txHash}`;
};

export const getExplorerContractUrl = (contractId: string): string => {
  const baseUrl = process.env.NEXT_PUBLIC_STELLAR_EXPLORER_URL || 'https://stellar.expert/explorer/testnet/contract';
  return `${baseUrl}/${contractId}`;
};
