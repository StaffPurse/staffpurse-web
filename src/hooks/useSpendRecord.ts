import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface SpendRecord {
  id: string;
  amount: number;
  timestamp: string;
  employee_id: string;
  merkle_proof: string[];
}

export function useSpendRecord(recordId: string | null) {
  const [data, setData] = useState<SpendRecord | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!recordId) {
      setData(null);
      setError(null);
      return;
    }

    let isMounted = true;

    async function fetchRecord() {
      setIsLoading(true);
      setError(null);
      try {
        const { data: record, error: fetchError } = await supabase
          .from('spend_records')
          .select('*')
          .eq('id', recordId)
          .single();

        if (fetchError) throw fetchError;
        if (isMounted) setData(record as SpendRecord);
      } catch (err) {
        if (isMounted) setError(err instanceof Error ? err : new Error('Failed to fetch record'));
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchRecord();

    return () => {
      isMounted = false;
    };
  }, [recordId]);

  return { data, isLoading, error };
}
