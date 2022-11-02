import React, {useContext, useEffect} from "react";
import NavMenuContainer from "./navmenu/NavMenuContainer";
import { FaShoppingCart } from "react-icons/fa";
import NavCarrito from "./navmenu/NavCarrito";
import authContext from "../../context/authContext/authContext";
import productoContext from "../../context/productoContext/productoContext";
import NavMenuContainerOut from "./navmenu/NavMenuContainerOut";
import Busqueda from "../busqueda/Busqueda";

const Navbar = () => {

  const { autenticado, usuarioAutenticado, cerrarSesion } = useContext(authContext);
  const { establecerAccion } = useContext(productoContext);

  useEffect(()=>{
    usuarioAutenticado();
  },[])

  const establecerAccionAux = (accion) => {
    establecerAccion({ accion });
  };

  
  return (
    <div className="navbar bg-base-100 mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex-1">
        <FaShoppingCart className="text-xl" />
        <a className="normal-case text-xl ml-1 "> Kiosquito</a>
      </div>
      <div className="flex-none gap-2">
       <Busqueda/>

        <NavCarrito />

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
