import { Base } from './Base.model'

export interface User extends Base {
  nombre: string
  email?: string
  password?: string
  movil?: number
  advertencia?: number
  carnet?: number
  provincia?: string
  municipio?: string
  registro?: Date
  isAdmin?: boolean
  perfilimg?: string
  perfil_cloud_id?: string
  kycimg?: string
  kyc?: boolean
  kyc_cloud_id?: string
  isVerified?: boolean
  emailToken?: string
  recoveryCode?: string
}
