import React, {useContext, useEffect, useState} from "react";
import HomeContainer from "../../components/layout/HomeContainer";
import Tablero from "../../components/layout/Tablero";
import Ubicacion from '../../components/layout/Ubicacion'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Modal from '../../components/layout/Modal'




const Home = () => {

  

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
