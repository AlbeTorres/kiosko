import React, {useContext, useEffect} from "react";
import NavMenuContainer from "./navmenu/NavMenuContainer";
import { FaShoppingCart } from "react-icons/fa";
import NavCarrito from "./navmenu/NavCarrito";
import NavMenuContainerOut from "./navmenu/NavMenuContainerOut";
import Busqueda from "../busqueda/Busqueda";
import NavPedido from "./navmenu/NavPedido";
import{socket} from '../../config/socket'
import NavNotificacion from "./navmenu/NavNotificacion";

const Navbar = ({pedidos, autenticado, usuario}) => {
 

  useEffect(()=>{
    socket.emit('addUser',{id:usuario?._id,admin:usuario?.isAdmin})
  },[usuario])

  

  
  return (
    <div className=" bg-base-100 w-full flex items-center min-h-6 my-3">
      <div className="flex-1 flex items-center">
        <FaShoppingCart className="text-xl" />
        <a className="normal-case text-xl ml-1 "> Kiosquito</a>
      </div>
      <div className="flex items-center gap-1">
       <Busqueda/>

       {usuario?.isAdmin && <NavNotificacion/>}

       {usuario?._id!=='' && pedidos.length!==0 && !usuario?.isAdmin &&
       <NavPedido/>}
        
       {usuario?._id!=='' && !usuario?.isAdmin && 
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
