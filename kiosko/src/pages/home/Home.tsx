import React, { useContext, useEffect } from "react";
import HomeContainer from "../../components/layout/HomeContainer";
import Tablero from "../../components/layout/Tablero";
import Modal from "../../components/layout/Modal";
import { socket } from "../../config/socket";
import authContext from "../../context/authContext/authContext";

import productoContext from "../../context/productoContext/productoContext";

import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useAllProducts } from "../../hooks/api/product.hook";

const Home = () => {
  const busqueda = "";
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
      {isSuccess && (
        <Tablero
          productos={products.productos}
          usuario={usuario}
          busqueda={busqueda}
        />
      )}
    </>
  );
};

export default Home;
