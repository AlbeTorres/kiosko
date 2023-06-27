import React,{useContext, useEffect} from "react";
import Modal from "../../components/layout/Modal";
import authContext from "../../context/authContext/authContext";
import usuarioContext from "../../context/usuarioContext/usuarioContext";
import PerfilDatos from "../../components/perfil/PerfilDatos";
import PerfilNav from "../../components/perfil/PerfilNav";


const Perfil = () => {

  const {usuario, usuarioAutenticado}=useContext(authContext)
  const {cambio}=useContext(usuarioContext)

useEffect(()=>{
  usuarioAutenticado();
},[cambio])
  
  return (
    <div>
    <PerfilDatos usuario={usuario}/>
    <Modal/>
      

     
    </div>
  );
};

export default Perfil;
