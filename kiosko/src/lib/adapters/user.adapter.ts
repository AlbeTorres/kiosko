import { User } from '../Models/User.model'
import { FetchAuthenticateUserData } from '../requests/auth.type'

export const adaptUserResponse = (data: FetchAuthenticateUserData): User => ({
  _id: data.usuario._id,
  nombre: data.usuario.nombre,
  apellido: data.usuario.apellido,
  address: data.usuario.address,
  email: data.usuario.email,
  movil: data.usuario.movil,
  advertencia: data.usuario.advertencia,
  carnet: data.usuario.carnet,
  provincia: data.usuario.provincia,
  municipio: data.usuario.municipio,
  registro: data.usuario.registro,
  isAdmin: data.usuario.isAdmin,
  perfilimg: data.usuario.perfilimg,
  perfil_cloud_id: data.usuario.perfil_cloud_id,
  kycimg: data.usuario.kycimg,
  kyc: data.usuario.kyc,
  kyc_cloud_id: data.usuario.kyc_cloud_id,
  isVerified: data.usuario.isVerified,
  emailToken: data.usuario.emailToken,
  recoveryCode: data.usuario.recoveryCode,
})
