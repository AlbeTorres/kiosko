import { PropsWithChildren, createContext, useReducer } from "react";
import authReducer from "./authReducer";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";
import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  CERRAR_SESION,
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  ELIMINAR_MENSAJE,
} from "../../types";
import authContext from "./authContext";

export type AuthContextProps = PropsWithChildren<{}>;

const storage_token = "token";

export type initOuput = {
  token: string;
};

const init = (): initOuput => {
  if (typeof window !== "undefined") {
    return {
      token: localStorage.getItem(storage_token) || null,
    };
  } else {
    return { token: null };
  }
};

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const initState = init();
  
  const initialState = {
    token: initState.token,
    usuario: { _id: "", nombre: "" },
    mensaje: null,
    autenticado: false,
    cargando: true,
    aux: 0,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //funciones auth
  //Retorna el usuario autenticado

  const usuarioAutenticado = async () => {
    const token = localStorage.getItem(storage_token);

    if (token) {
      tokenAuth(token);
    }

    try {
      if (token) {
        const respuesta = await clienteAxios.get("api/auth");

        dispatch({
          type: OBTENER_USUARIO,
          userpayload: respuesta.data.usuario,
        });
      }
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  const registrarUsuario = async (datos) => {
    try {
      const response = await clienteAxios.post("api/usuarios/", datos);

      localStorage.setItem("token", response.data.token);

      dispatch({
        type: REGISTRO_EXITOSO,
        userpayload: response.data,
      });

      usuarioAutenticado();
    } catch (error) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: "error",
      };

      dispatch({
        type: REGISTRO_ERROR,
        alertapayload: alerta,
      });
    }
  };

  //Cuando el usuario inicia sesion
  const iniciarSesion = async (datos) => {
    try {
      const response = await clienteAxios.post("/api/auth", datos);

      localStorage.setItem(storage_token, response.data.token);

      dispatch({
        type: LOGIN_EXITOSO,
      });

      usuarioAutenticado();
    } catch (error) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: "error",
      };

      dispatch({
        type: REGISTRO_ERROR,
        alertapayload: alerta,
      });
    }
  };

  //Cerrar Sesion
  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION,
    });
  };

  const eliminarMensaje = () => {
    dispatch({
      type: ELIMINAR_MENSAJE,
    });
  };

  const contextValue = {
    token: state.token,
    usuario: state.usuario,
    mensaje: state.mensaje,
    autenticado: state.autenticado,
    cargando: state.cargando,
    aux: state.aux,
    registrarUsuario,
    usuarioAutenticado,
    iniciarSesion,
    cerrarSesion,
    eliminarMensaje,
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export default AuthContextProvider;
