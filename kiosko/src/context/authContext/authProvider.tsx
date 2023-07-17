import { PropsWithChildren, createContext, useReducer } from 'react'
import authContext from './authContext'
import { User } from '../../lib/Models/User.model'
import { useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { useLocalStorage } from 'usehooks-ts'
import { LoginAuthOutput } from '../../lib/requests/auth.type'

export type AuthContextProps = PropsWithChildren<{}>

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const client = useQueryClient()
  const params = useParams()
  const history = useNavigate()
  const [auth, setAuth] = useLocalStorage<User>('auth', null)
  const [token, setToken] = useLocalStorage<string>('token', null)

  const handleLogin = async (data: LoginAuthOutput) => {
    setAuth(data.user)
    setToken(data.token)
    await client.refetchQueries(['profile'])
    history((params?.returnUrl as string) ?? '/')
  }

  const handleLogout = async (redirectToLogin?: boolean) => {
    await client.cancelQueries()
    history(redirectToLogin ? '/login/' : '/')
    setAuth(null)
    setToken(null)
    client.clear()
  }

  const contextValue = {
    usuario: auth,
    saveData: setAuth,
    login: handleLogin,
    logout: handleLogout,
  }

  return <authContext.Provider value={contextValue}>{children}</authContext.Provider>
}

export default AuthContextProvider
