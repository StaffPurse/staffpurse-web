import { sha256 } from 'js-sha256';

function hexToBytes(hex: string): number[] {
  const bytes = [];
  for (let c = 0; c < hex.length; c += 2) {
    bytes.push(parseInt(hex.substr(c, 2), 16));
  }
  return bytes;
}

/**
 * Validates a Merkle proof for a given record.
 * @param recordHash The hash of the record being verified
 * @param proof An array of sibling hashes forming the Merkle proof
 * @param expectedRoot The expected Merkle root from the Soroban contract
 * @returns boolean True if the proof is valid, false otherwise
 */
export function verifyMerkleProof(recordHash: string, proof: string[], expectedRoot: string): boolean {
  let currentHash = recordHash;

  for (const sibling of proof) {
    const [a, b] = currentHash < sibling ? [currentHash, sibling] : [sibling, currentHash];
    const hasher = sha256.create();
    hasher.update(hexToBytes(a));
    hasher.update(hexToBytes(b));
    currentHash = hasher.hex();
  }

  return currentHash === expectedRoot;
}
