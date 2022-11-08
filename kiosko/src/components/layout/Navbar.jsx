import React, {useContext, useEffect} from "react";
import NavMenuContainer from "./navmenu/NavMenuContainer";
import { FaShoppingCart } from "react-icons/fa";
import NavCarrito from "./navmenu/NavCarrito";
import authContext from "../../context/authContext/authContext";
import productoContext from "../../context/productoContext/productoContext";
import NavMenuContainerOut from "./navmenu/NavMenuContainerOut";
import Busqueda from "../busqueda/Busqueda";

const Navbar = () => {

  const { usuario,autenticado, usuarioAutenticado, cerrarSesion } = useContext(authContext);
  const { establecerAccion } = useContext(productoContext);

  useEffect(()=>{
    usuarioAutenticado();
  },[])

  const establecerAccionAux = (accion) => {
    establecerAccion({ accion });
  };

  
  return (
    <div className=" bg-base-100 w-full flex items-center min-h-6 my-3">
      <div className="flex-1 flex items-center">
        <FaShoppingCart className="text-xl" />
        <a className="normal-case text-xl ml-1 "> Kiosquito</a>
      </div>
      <div className="flex items-center gap-2">
       <Busqueda/>
       {usuario?.isAdmin===false && 
        <NavCarrito />}

        {autenticado ? (
          <NavMenuContainer />
        ) : (
         <NavMenuContainerOut/>
        )}
      </div>
    </div>
  );
};

export default Navbar;
