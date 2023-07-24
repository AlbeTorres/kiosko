import { PropsWithChildren, createContext, useReducer } from 'react'
import authContext from './authContext'
import { User } from '../../lib/Models/User.model'
import { useQueryClient } from '@tanstack/react-query'
import { useLocalStorage } from 'usehooks-ts'
import { LoginAuthOutput } from '../../lib/requests/auth.type'

export type AuthContextProps = PropsWithChildren<{}>

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const client = useQueryClient()
  const [auth, setAuth] = useLocalStorage<User | null>('auth', null)
  const [token, setToken] = useLocalStorage<string | null>('token', null)

  const handleLogin = async (data: LoginAuthOutput) => {
    setAuth(data.usuario)
    setToken(data.token)
    await client.refetchQueries(['profile'])
  }

  const handleLogout = async () => {
    await client.cancelQueries()
    setAuth(null)
    setToken(null)
    client.clear()
  }

  const contextValue = {
    data: auth,
    token: token,
    saveData: setAuth,
    login: handleLogin,
    logout: handleLogout,
  }

  return <authContext.Provider value={contextValue}>{children}</authContext.Provider>
}

export default AuthContextProvider
