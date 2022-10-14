import React, { useReducer } from "react";
import authReducer from "./authReducer";
import authContext from "./authContext";
import clienteAxios from '../../config/axios';
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

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    usuario:{_id:'', nombre:''},
    mensaje: null,
    autenticado: null,
    cargando: true,
    aux:0
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //funciones auth
  //Retorna el usuario autenticado

  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
      if (token) {
      const respuesta = await clienteAxios.get("api/auth");
     
      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.usuario,
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

      localStorage.setItem('token', response.data.token)

      dispatch({
        type: REGISTRO_EXITOSO,
        payload: response.data,
      });

      usuarioAutenticado();

    } catch (error) {
      console.log(error)
      const alerta = {
        msg: error.response.data.msg,
        categoria: "error",
      };

      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta,
      });
    }
  };

  

  //Cuando el usuario inicia sesion
  const iniciarSesion = async (datos) => {
    try {
      const response = await clienteAxios.post("/api/auth", datos);
      

      localStorage.setItem("token", response.data.token);

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
        payload: alerta,
      });
    }
  };

  //Cerrar Sesion
  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION,
    });
  };

  const eliminarMensaje=()=>{
    dispatch({
      type: ELIMINAR_MENSAJE,
    });
  }

  return (
    <authContext.Provider
      value={{
        token: state.token,
        usuario: state.usuario,
        mensaje: state.mensaje,
        autenticado: state.autenticado,
        cargando:state.cargando,
        aux:state.aux,
        registrarUsuario,
        usuarioAutenticado,
        iniciarSesion,
        cerrarSesion,
        eliminarMensaje,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
