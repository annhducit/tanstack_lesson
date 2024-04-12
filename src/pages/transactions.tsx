import { useTnxById } from '@/hooks/tnx-id'
import { useParams } from 'react-router-dom'

const Transaction = () => {
  const { id } = useParams()

  const { data: transaction, isLoading, isError } = useTnxById(id || '')

  if (isLoading) {
    return <div className="w-5 h-5 border-2 border-blue-500 rounded-full animate-spin" />
  }

  if (isError) {
    return <div>Error occurred</div>
  }

  return (
    <div className="container p-10 mx-auto">
      This is transation pages
      <div>
        {transaction && (
          <div>
            <p>ID: {transaction?.id}</p>
            <p>Date: {transaction?.date}</p>
            <p>Amount: {transaction?.amount}</p>
            <p>Description: {transaction?.description}</p>
            <p>Sender: {transaction?.sender}</p>
            <p>Receiver: {transaction?.receiver}</p>
            <p>Status: {transaction?.status}</p>
            <p>CreatedAt: {new Date(transaction?.createdAt).toLocaleString()}</p>
            <p>UpdatedAt: {new Date(transaction?.updatedAt).toLocaleString()}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Transaction
