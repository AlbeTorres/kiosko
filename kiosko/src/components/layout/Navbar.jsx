import React, {useContext, useEffect} from "react";
import NavMenuContainer from "./navmenu/NavMenuContainer";
import { FaShoppingCart } from "react-icons/fa";
import NavCarrito from "./navmenu/NavCarrito";
import authContext from "../../context/authContext/authContext";
import productoContext from "../../context/productoContext/productoContext";
import NavMenuContainerOut from "./navmenu/NavMenuContainerOut";

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
    <div className="navbar bg-base-100 px-4">
      <div className="flex-1">
        <FaShoppingCart className="text-xl" />
        <a className="normal-case text-xl ml-1 "> Kiosquito</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control absolute top-20 right-20 md:relative md:top-0 md:right-0  ">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>

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
