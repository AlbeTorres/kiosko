import React, {useContext, useEffect, useState} from "react";
import HomeContainer from "../../components/layout/HomeContainer";
import Tablero from "../../components/layout/Tablero";
import Ubicacion from '../../components/layout/Ubicacion'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Modal from '../../components/layout/Modal'
import productoContext from "../../context/productoContext/productoContext";
import {io} from 'socket.io-client'


const Home = () => {

  const [socket,setSocket]=useState(null)


  useEffect(()=>{

    setSocket(io('ws://localhost:8900'))
  },[])

  const {busqueda} =
    useContext(productoContext);

  return (
    <div>
        <HomeContainer>
            <Navbar />
            <Tablero/>
            <Ubicacion/>
        </HomeContainer>
            <Footer />
        <Modal />
    </div>
  );
};

export default Home;
