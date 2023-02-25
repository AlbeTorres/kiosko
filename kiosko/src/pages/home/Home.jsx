import React, { useContext, useEffect,} from "react";
import HomeContainer from "../../components/layout/HomeContainer";
import Tablero from "../../components/layout/Tablero";
import Ubicacion from '../../components/layout/Ubicacion'
import Navbar from '../../components/layout/Navbar'
import Modal from '../../components/layout/Modal'
import { socket } from '../../config/socket'
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
     
    })

    socket.on('newpedido',(msg)=>{
      obtenerPedidos();
    })
    
    socket.on('cambioestado',()=>{
      obtenerProductos()
    })
    
    usuarioAutenticado()
    obtenerPedidos();
    obtenerProductos();
  },[token])

 

  return (
    <>
            <Navbar pedidos={pedidos} usuario={usuario} autenticado={autenticado} />
        <HomeContainer>
            <Tablero productos={productos} usuario={usuario} busqueda={busqueda} />
            <Ubicacion/>
        </HomeContainer>
            {/* <Footer /> */}
        <Modal />
    </>
  );
};

export default Home;
