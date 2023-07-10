import { createContext } from "react";
import { User } from "../../lib/Models/User.model";
import { Alerta } from "../../lib/Models/Alerta.model";

interface Auth {
    token: string | null;
    usuario: User;
    mensaje: Alerta | null;
    autenticado: boolean;
    cargando: boolean;
    aux: number;
    usuarioAutenticado(): void;
    registrarUsuario: (datos) => void;
    iniciarSesion: (datos) => void;
    cerrarSesion(): void;
  }
  

export const authContext = createContext<Auth>(null);

export default authContext;