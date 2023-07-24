import { createContext } from 'react'
import { User } from '../../lib/Models/User.model'
import { LoginAuthOutput } from '../../lib/requests/auth.type'

interface Auth {
  data: User | null
  saveData(data: User): void
  login(data: LoginAuthOutput): void
  logout(redirectToLogin?: boolean): void
}

export const authContext = createContext<Auth | null>(null)

export default authContext
