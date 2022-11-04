import React from "react";
import Modal from "../../components/layout/Modal";

import PerfilDatos from "../../components/perfil/PerfilDatos";
import PerfilNav from "../../components/perfil/PerfilNav";


const Perfil = () => {
  return (
    <div>
    <PerfilNav/>
    <PerfilDatos/>
    <Modal/>
      

     
    </div>
  );
};

export default Perfil;
