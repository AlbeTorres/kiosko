import React, { useContext, useEffect, useState } from "react";
import NavMenuContainer from "./navmenu/NavMenuContainer";
import { FaShoppingCart } from "react-icons/fa";
import NavCarrito from "./navmenu/NavCarrito";
import NavMenuContainerOut from "./navmenu/NavMenuContainerOut";
import Busqueda from "../busqueda/Busqueda";
import NavPedido from "./navmenu/NavPedido";
import { socket } from "../../config/socket";
import NavNotificacion from "./navmenu/NavNotificacion";
import HomeContainer from "./HomeContainer";
import authContext from "../../context/authContext/authContext";
import pedidoContext from "../../context/pedidoContext/pedidoContext";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ children }) => {
  const { usuario, autenticado, usuarioAutenticado } = useContext(authContext);
  const { pedidos, obtenerPedidos } = useContext(pedidoContext);

  const [scrolled, setScrolled] = useState(false);

  let location = useLocation();

  console.log(usuario)
  useEffect(() => {
    usuarioAutenticado();
    obtenerPedidos();
    socket.emit("addUser", { id: usuario?._id, admin: usuario?.isAdmin });

    const onScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className=" bg-base-100 fixed top-0  z-50   w-full md:py-4 min-h-6  ">
        <HomeContainer>
          <div className="flex justify-between items-center my-1">
            <div className="flex items-center">
              <FaShoppingCart className="text-xl" />
              <Link to={"/"} className="normal-case text-xl ml-1 ">
                {" "}
                Kiosquito
              </Link>
            </div>
            <div className="flex items-center gap-1 ">
              {!scrolled && location.pathname === "/" && (
                <div className="md:hidden">
                  <Busqueda />
                </div>
              )}
              {location.pathname === "/" && (
                <div className="hidden md:block ">
                  <Busqueda />
                </div>
              )}

              {usuario?.isAdmin && <NavNotificacion />}

              {usuario?._id !== "" &&
                pedidos.length !== 0 &&
                !usuario?.isAdmin && <NavPedido />}

              {!usuario?.isAdmin && <NavCarrito />}

              {autenticado ? <NavMenuContainer /> : <NavMenuContainerOut />}
            </div>
          </div>
        </HomeContainer>
      </div>
      {children}
    </>
  );
};

export default Navbar;
