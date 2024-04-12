import { userApi, UserProfile } from '@/api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export const useProfile = (options?: Omit<UseQueryOptions<UserProfile>, 'queryKey' | 'queryFn'>) => {
  return useQuery<UserProfile>({
    ...options,
    queryKey: ['profile'],
    queryFn: userApi.getUserProfile,
  })
}
