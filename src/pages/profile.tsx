import { useProfile } from '@/hooks'
import { useState } from 'react'

export default function Profile() {
  const [tongleLogin, setTongleLogin] = useState<boolean>(false)

  const toggleLogin = () => {
    setTongleLogin(!tongleLogin)
  }
  const { data: userProfile, isLoading, isError } = useProfile({ enabled: tongleLogin })

  if (isLoading) {
    return <div className="w-5 h-5 border-2 border-blue-500 rounded-full animate-spin" />
  }

  if (isError) {
    return <div>Error occurred</div>
  }

  return (
    <div>
      <h1 className="mt-10 text-3xl font-bold text-center">This is Profile Page</h1>
      <button onClick={toggleLogin} className="px-4 py-2 text-white bg-blue-500 rounded-lg w-52 ">
        Login
      </button>
      {tongleLogin && (
        <div>
          <p>Name: {userProfile?.name}</p>
          <p>Email: {userProfile?.email}</p>
        </div>
      )}
    </div>
  )
}
