import clienteAxios from './axios'

export const AxiosInterceptor = () => {
  clienteAxios.interceptors.request.use(
    request => {
      if (request.url?.includes('products')) return request

      const token = localStorage.getItem('token')

      if (token) {
        clienteAxios.defaults.headers.common['x-auth-token'] = token
      }

      console.log('eso')
      return request
    },
    error => {
      return Promise.reject(error)
    },
  )
}
