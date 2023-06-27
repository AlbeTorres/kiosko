import React, { useContext, useEffect } from "react";
import HomeContainer from "../../components/layout/HomeContainer";
import Tablero from "../../components/layout/Tablero";
import Modal from "../../components/layout/Modal";
import { socket } from "../../config/socket";
import authContext from "../../context/authContext/authContext";

import productoContext from "../../context/productoContext/productoContext";

const Home = () => {
  const { busqueda, productos, obtenerProductos } = useContext(productoContext);
  const { usuario } = useContext(authContext);

  const token = localStorage.getItem("token");

  useEffect(() => {
    socket.on("hello", (msg) => {});

    socket.on("newpedido", (msg) => {
      obtenerPedidos();
    });

    socket.on("cambioestado", () => {
      obtenerProductos();
    });

    obtenerProductos();
  }, [token]);

  return (
    <>
      <HomeContainer>
        <Tablero productos={productos} usuario={usuario} busqueda={busqueda} />
        {/* <Ubicacion /> */}
      </HomeContainer>
      {/* <Footer /> */}
      <Modal />
    </>
  );
};

export default Home;
