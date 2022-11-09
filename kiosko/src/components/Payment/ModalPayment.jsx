import React, { useContext } from "react";
import productoContext from "../../context/productoContext/productoContext";
import KycForm from "../form/userForm/KycForm";
import YesKycView from './YesKycView'
import '../../index.css'
import NokycView from "./NokycView";

const ModalPayment = () => {
  const { accion } = useContext(productoContext);

  return (
      <div className="modale modal-bottom sm:modal-middle">
        {accion?.accion === "nokyc" &&
          <div className="w-full flex items-center justify-center ">
         <NokycView/>
          </div>}
        {accion?.accion === "yeskyc" &&
          <div className="w-full flex items-center justify-center ">
          <YesKycView/>
          </div>}
      
      </div>
    
  );
};

export default ModalPayment;