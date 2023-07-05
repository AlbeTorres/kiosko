import clienteAxios from "../../config/axios.js";
import { ChangePassword, SendRecoveryPasswordEmail } from "./password.type.js";

export const sendRecoveryPasswordCode: SendRecoveryPasswordEmail = ({ data }) =>
  clienteAxios
    .post("api/usuarios/recovery-code", { email: data.email })
    .then((r) => r.data);

export const changePassword: ChangePassword = ({ data }) =>
  clienteAxios
    .post("api/usuarios/change-password", {
      email: data.email,
      password: data.password,
      code: data.code,
    })
    .then((r) => r.data);
