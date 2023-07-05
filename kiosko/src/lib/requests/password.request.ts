import clienteAxios from "../../config/axios.js";
import { SendRecoveryPasswordEmail } from "./password.type.js";

export const sendRecoveryPasswordCode: SendRecoveryPasswordEmail = ({ data }) =>
  clienteAxios.post("api/usuarios/recovery-code", { email: data.email }).then((r) => r.data);
