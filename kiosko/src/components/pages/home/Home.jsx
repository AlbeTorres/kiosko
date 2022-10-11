import React from "react";
import HomeContainer from "../../layout/HomeContainer";
import Tablero from "../../layout/Tablero";
import Ubicacion from '../../layout/Ubicacion'
import Navbar from '../../layout/Navbar'
import Hero from '../../layout/Hero'
import Footer from '../../layout/Footer'
import Modal from '../../layout/Modal'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <HomeContainer>
            <Tablero/>
            <Ubicacion/>
        </HomeContainer>
        <Footer />
        <Modal />
    </div>
  );
};

export default Home;
