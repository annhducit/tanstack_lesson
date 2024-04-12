import axios, { AxiosInstance, AxiosResponse } from 'axios'

const axiosClient: AxiosInstance = axios.create({
  // baseURL: 'https://js-post-api.herokuapp.com/api',
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
    return response
  },
  (error: unknown) => {
    return Promise.reject(error)
  },
)

export default axiosClient
