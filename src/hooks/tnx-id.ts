import { Transaction, transactionApi } from '@/api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export const useTnxById = (id: string, options?: Omit<UseQueryOptions<Transaction>, 'queryKey' | 'queryFn'>) => {
  return useQuery<Transaction>({
    ...options,
    queryKey: ['transaction', id],
    queryFn: () => transactionApi.getTransactionById(id),
    enabled: !!id,
    refetchInterval: (query) => {
      const currentState = query.state?.data?.status
      if (currentState === 'completed' || currentState === 'cancelled' || currentState === 'failed') {
        return false
      } else {
        return 3000
      }
    },
  })
}
