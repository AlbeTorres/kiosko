import { Alerta } from "../../lib/Models/Alerta.model";
import { User } from "../../lib/Models/User.model";
import {
  REGISTRO_ERROR,
  REGISTRO_EXITOSO,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
  ELIMINAR_MENSAJE,
} from "../../types";

export type AuthActionType =
  | REGISTRO_ERROR
  | REGISTRO_EXITOSO
  | OBTENER_USUARIO
  | LOGIN_EXITOSO
  | LOGIN_ERROR
  | CERRAR_SESION
  | ELIMINAR_MENSAJE;

export type AuthPayload = string;
export type BolPayload = boolean;
export type NumPayload = number;
export type AlertPayload = Alerta;
export type UserPayload = User;

export interface AuthAction {
  type: AuthActionType;
  payload?: AuthPayload;
  bolpayload?: BolPayload;
  numpayload?: NumPayload;
  alertapayload?: AlertPayload;
  userpayload?: UserPayload;
}

export default (
  state: {
    token: string | null;
    usuario: User;
    mensaje: Alerta | null;
    autenticado: boolean ;
    cargando: boolean;
    aux: number;
  },
  action: AuthAction
) => {
  switch (action.type) {
    case LOGIN_EXITOSO:
      return {
        ...state,
        autenticado: true,
        mensaje: null,
        cargando: false,
      };
    case REGISTRO_EXITOSO:
      return {
        ...state,
        autenticado: true,
        mensaje: null,
        cargando: false,
      };
    case CERRAR_SESION:
    case LOGIN_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        usuario: { _id: "", nombre: "" },
        autenticado: null,
        mensaje: action.alertapayload,
        cargando: false,
      };
    case REGISTRO_ERROR:
      return {
        ...state,
        mensaje: action.alertapayload,
        cargando: false,
      };

    case OBTENER_USUARIO:
      return {
        ...state,
        autenticado: true,
        usuario: action.userpayload,
        cargando: false,
      };
    case ELIMINAR_MENSAJE:
      return {
        ...state,
        mensaje: null,
      };
    default:
      return state;
  }
};
