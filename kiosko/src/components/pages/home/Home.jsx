import React, {useContext} from "react";
import HomeContainer from "../../layout/HomeContainer";
import Tablero from "../../layout/Tablero";
import Ubicacion from '../../layout/Ubicacion'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import Modal from '../../layout/Modal'
import productoContext from "../../../context/productoContext/productoContext";


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
