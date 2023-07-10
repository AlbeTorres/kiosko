import { Base } from "./Base.model";

export interface User extends Base {
  nombre: String;
  email?: String;
  password?: String;
  movil?: Number;
  advertencia?: Number;
  carnet?: Number;
  provincia?: String;
  municipio?: String;
  registro?: Date;
  isAdmin?: boolean;
  perfilimg?: String;
  perfil_cloud_id?: String;
  kycimg?: String;
  kyc?: boolean;
  kyc_cloud_id?: String;
  isVerified?: boolean;
  emailToken?: String;
  recoveryCode?: String;
}
