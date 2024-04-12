import axiosClient from './axios-client'

export interface Transaction {
  id: string
  date: string
  amount: string
  description: string
  sender: string
  receiver: string
  status: 'pending' | 'completed' | 'cancelled' | 'failed'
  createdAt: number
  updatedAt: number
}

export const transactionApi = {
  getTransactionById: (tnx_id: string): Promise<Transaction> => axiosClient.get(`/transactions/${tnx_id}`),
}
