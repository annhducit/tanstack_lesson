import TestContext from '@/components/test-context'
import { Dispatch, SetStateAction, createContext, useState } from 'react'
interface UserType {
  user: string
  setUser: Dispatch<SetStateAction<string>>
}

export const UserContext = createContext<UserType>({} as UserType)

const Context = () => {
  const [user, setUser] = useState<string>('Anh Duc')
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <TestContext />
    </UserContext.Provider>
  )
}

export default Context
