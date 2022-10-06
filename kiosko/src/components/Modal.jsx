import React, { useContext } from "react";
import EliminarProducto from "./form/EliminarProducto";
import ModificarProducto from "./form/ModificarProducto";
import productoContext from "../context/productoContext";

const Modal = () => {

  const {accion}=useContext(productoContext);
  
  
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        {accion?.accion === 'modificar' ? <ModificarProducto /> : <EliminarProducto />}
      </div>
    </div>
  );
};

export default Modal;
