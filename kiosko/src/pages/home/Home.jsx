import React, {useContext} from "react";
import HomeContainer from "../../components/layout/HomeContainer";
import Tablero from "../../components/layout/Tablero";
import Ubicacion from '../../components/layout/Ubicacion'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Modal from '../../components/layout/Modal'
import productoContext from "../../context/productoContext/productoContext";


const Home = () => {

  const { busqueda} =
    useContext(productoContext);

  return (
    <div>
        <Navbar />
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
