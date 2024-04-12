import axiosClient from './axios-client'

export interface UserProfile {
  id: number
  name: string
  city: string
  email: string
}

export const userApi = {
  getUserProfile: (): Promise<UserProfile> => axiosClient.get('/public-profile'),
}
