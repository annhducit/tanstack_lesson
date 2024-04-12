import { UserContext } from '@/contexts/user-context'
import { useContext } from 'react'

const TestContext = () => {
  const { user, setUser } = useContext(UserContext)

  return (
    <div>
      {user}
      <button onClick={() => setUser('Change')}>Click</button>
    </div>
  )
}

export default TestContext
