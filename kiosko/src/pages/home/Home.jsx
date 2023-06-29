import React, { useContext, useEffect } from "react";
import HomeContainer from "../../components/layout/HomeContainer";
import Tablero from "../../components/layout/Tablero";
import Modal from "../../components/layout/Modal";
import { socket } from "../../config/socket";
import authContext from "../../context/authContext/authContext";

import productoContext from "../../context/productoContext/productoContext";
import { useAllProducts } from "../../hooks/product.hook";


const Home = () => {
  const { busqueda } = useContext(productoContext);
  const { usuario } = useContext(authContext);

  const token = localStorage.getItem("token");

  const { data: products, isSuccess, refetch } = useAllProducts();

  console.log(products);

  useEffect(() => {
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
