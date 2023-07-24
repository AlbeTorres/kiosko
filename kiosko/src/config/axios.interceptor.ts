import clienteAxios from './axios'

export const AxiosInterceptor = () => {
  clienteAxios.interceptors.request.use(
    request => {
      const token = localStorage.getItem('token')

      if (token !== 'null') {
        clienteAxios.defaults.headers.common['x-auth-token'] = token
        return request
      }

      if (request.url)
        if (request.method === 'get' && request.url.includes('auth')) {
          return Promise.reject(new Error('Token not found'))
        }

      return request
    },
    error => {
      return Promise.reject(error)
    },
  )
}
