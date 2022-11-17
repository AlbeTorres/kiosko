import React, {useCallback, useContext, useEffect, useState} from "react";
import HomeContainer from "../../components/layout/HomeContainer";
import Tablero from "../../components/layout/Tablero";
import Ubicacion from '../../components/layout/Ubicacion'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Modal from '../../components/layout/Modal'
import { socket } from '../../config/socket'
import { toast } from 'react-toastify'
import authContext from "../../context/authContext/authContext";
import pedidoContext from "../../context/pedidoContext/pedidoContext";
import productoContext from "../../context/productoContext/productoContext";




const Home = () => {

  const { usuario,autenticado, usuarioAutenticado } = useContext(authContext);
  const { busqueda, productos, obtenerProductos } = useContext(productoContext);
  const { pedidos, obtenerPedidos}= useContext(pedidoContext)
  
  const token = localStorage.getItem("token");

  
  useEffect(()=>{
    
    socket.on('hello', (msg) => {
      toast.success(msg)
    })

    socket.on('newpedido',(msg)=>{
      obtenerPedidos();
      toast.success(msg)
    })
    
    socket.on('cambioestado',()=>{
      obtenerProductos()
      console.log('cambio')
      toast.success('cambiado')
    })
    
    usuarioAutenticado()
    obtenerPedidos();
    obtenerProductos();
  },[token])

 

  return (
    <div>
        <HomeContainer>
            <Navbar pedidos={pedidos} usuario={usuario} autenticado={autenticado} />
            <Tablero productos={productos} usuario={usuario} busqueda={busqueda} />
            <Ubicacion/>
        </HomeContainer>
            <Footer />
        <Modal />
    </div>
  );
};

export default Home;
