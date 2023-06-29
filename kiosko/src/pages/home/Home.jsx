import React, { useContext, useEffect } from "react";
import HomeContainer from "../../components/layout/HomeContainer";
import Tablero from "../../components/layout/Tablero";
import Modal from "../../components/layout/Modal";
import { socket } from "../../config/socket";
import authContext from "../../context/authContext/authContext";

import productoContext from "../../context/productoContext/productoContext";
import { useAllProducts } from "../../hooks/product.hook";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const Home = () => {
  const { busqueda } = useContext(productoContext);
  const { usuario } = useContext(authContext);
  const { verificado } = useParams();

  const token = localStorage.getItem("token");

  const { data: products, isSuccess, refetch } = useAllProducts();

  useEffect(() => {
    if (verificado) {
      toast.success("Usuario verificado");
    }
    socket.on("hello", (msg) => {});

    socket.on("newpedido", (msg) => {
      refetch();
    });

    socket.on("cambioestado", () => {
      refetch();
    });
  }, [token]);

  return (
    <>
      <HomeContainer>
        {isSuccess && (
          <Tablero
            productos={products.productos}
            usuario={usuario}
            busqueda={busqueda}
          />
        )}
        {/* <Ubicacion /> */}
      </HomeContainer>
      {/* <Footer /> */}
      <Modal />
    </>
  );
};

export default Home;
