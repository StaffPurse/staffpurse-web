import { SpendRecord } from '../hooks/useSpendRecord';

export const MOCK_RECORDS: Record<string, SpendRecord> = {
  'rec_123456789': {
    id: 'rec_123456789',
    amount: 1500.00,
    timestamp: '2024-10-01T12:00:00Z',
    employee_id: 'emp_001',
    merkle_proof: [
      'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      'd2a0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b866'
    ]
  },
  'rec_987654321': {
    id: 'rec_987654321',
    amount: 45.50,
    timestamp: '2024-10-02T14:30:00Z',
    employee_id: 'emp_002',
    merkle_proof: [
      'f4b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b877'
    ]
  }
};

export const MOCK_ROOTS: Record<string, string> = {
  '2024-10-01': 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2',
};

export function getMockRecord(id: string): SpendRecord | null {
  return MOCK_RECORDS[id] || null;
}
