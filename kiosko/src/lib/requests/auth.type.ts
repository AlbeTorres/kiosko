import { User } from '../Models/User.model'
import { Function } from './types'

export type FetchAuthenticateUser = Function<
  FetchAuthenticateUserInput,
  FetchAuthenticateUserOutput
>

export type FetchAuthenticateUserInput = void

export type FetchAuthenticateUserOutput = User
export type FetchAuthenticateUserData = { usuario: User }

export type FetchValidateUser = Function<FetchValidateUserInput, FetchValidateUserOutput>

export type FetchValidateUserInput = {
  emailToken: String
}

export type FetchValidateUserOutput = User

export type LoginAuth = Function<LoginAuthInput, LoginAuthOutput>

export type LoginAuthInput = { email: string; password: string }

export type LoginAuthOutput = {
  usuario: User
  token: string
}

export type Singup = Function<SingupInput, SingupOutput>

export type SingupInput = {
  nombre: string
  email: string
  password: string
  isAdmin: string
  advertencia: number
  kycimg: string
  kyc: boolean
  carnet: string
}

export type SingupOutput = { token: string }
