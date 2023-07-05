import clienteAxios from "../../config/axios.js";
import tokenAuth from "../../config/tokenAuth.js";
import { FetchAuthenticateUser, FetchValidateUser } from "./auth.type.js";

export const fetchAuthenticateUser: FetchAuthenticateUser = () => {
  const token = localStorage.getItem("token");

  if (token) {
    tokenAuth(token);
  }

  if (token) {
    return clienteAxios.get("api/auth").then((r) => r.data);
  } else {
    localStorage.removeItem("token");
  }
};
export const fetchValidateUser: FetchValidateUser = (emailToken) => {
  const token = localStorage.getItem("token");

  if (token) {
    tokenAuth(token);
  }

  if (token) {
    return clienteAxios
      .post("api/usuarios/verify-email", { emailToken })
      .then((r) => r.data);
  } else {
    localStorage.removeItem("token");
  }
};
