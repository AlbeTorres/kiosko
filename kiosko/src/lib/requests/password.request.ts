import clienteAxios from "../../config/axios.js";
import { ChangePassword, SendRecoveryPasswordEmail } from "./password.type.js";

/**
 * The function `sendRecoveryPasswordCode` sends a recovery password code to a user's email address.
 * @param  - - `sendRecoveryPasswordCode`: This is the name of the function that will be exported.
 */
export const sendRecoveryPasswordCode: SendRecoveryPasswordEmail = ({ data }) =>
  clienteAxios
    .post("api/usuarios/recovery-code", { email: data.email })
    .then((r) => r.data);

/**
 * The `changePassword` function sends a POST request to the "api/usuarios/change-password" endpoint
 * with the email, password, and code data, and returns the response data.
 * @param  - - `data`: An object containing the following properties:
 */
export const changePassword: ChangePassword = ({ data }) =>
  clienteAxios
    .post("api/usuarios/change-password", {
      email: data.email,
      password: data.password,
      code: data.code,
    })
    .then((r) => r.data);
