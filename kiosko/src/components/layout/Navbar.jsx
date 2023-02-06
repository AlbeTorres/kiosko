import React, {useContext, useEffect, useState} from "react";
import NavMenuContainer from "./navmenu/NavMenuContainer";
import { FaShoppingCart } from "react-icons/fa";
import NavCarrito from "./navmenu/NavCarrito";
import NavMenuContainerOut from "./navmenu/NavMenuContainerOut";
import Busqueda from "../busqueda/Busqueda";
import NavPedido from "./navmenu/NavPedido";
import{socket} from '../../config/socket'
import NavNotificacion from "./navmenu/NavNotificacion";
import HomeContainer from "./HomeContainer";

const Navbar = ({pedidos, autenticado, usuario}) => {
 

  const [scrolled, setScrolled]=useState(false)

  useEffect(()=>{
    socket.emit('addUser',{id:usuario?._id,admin:usuario?.isAdmin})

    
      const onScroll=()=>{
        window.scrollY>50 ? setScrolled(true): setScrolled(false)
      }


      window.addEventListener('scroll', onScroll);

      return()=>window.removeEventListener('scroll', onScroll)
  },[usuario])

  

  
  return (
    <div className=" bg-base-100 fixed top-0  z-50   w-full md:py-4 min-h-6  ">
    <HomeContainer>
    <div className="flex justify-between items-center my-1">

      <div className="flex items-center">
        <FaShoppingCart className="text-xl" />
        <a className="normal-case text-xl ml-1 "> Kiosquito</a>
      </div>
      <div className="flex items-center gap-1 ">
      {
        !scrolled &&
        <div className="md:hidden">
          
      <Busqueda/>
        </div>
      } 
      <div className="hidden md:block ">

      <Busqueda/>
      </div>
        

       {usuario?.isAdmin && <NavNotificacion/>}

       {usuario?._id!=='' && pedidos.length!==0 && !usuario?.isAdmin &&
       <NavPedido/>}
        
       { !usuario?.isAdmin && 
        <NavCarrito />}

        {autenticado ? (
          <NavMenuContainer />
        ) : (
         <NavMenuContainerOut/>
        )}
      </div>
    </div>

    </HomeContainer>
    </div>
  );
};

export default Navbar;
