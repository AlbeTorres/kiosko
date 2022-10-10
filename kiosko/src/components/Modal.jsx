import React, { useContext } from "react";
import EliminarProducto from "./form/EliminarProducto";
import ModificarProducto from "./form/ModificarProducto";
import productoContext from "../context/productoContext";
import CrearProducto from "./form/CrearProducto";
import CarritoCompras from "./carro/CarritoCompras";

const Modal = () => {
  const { accion } = useContext(productoContext);

  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        {accion?.accion === "crearproducto" &&
          <div className="w-full flex items-center justify-center ">
          <CrearProducto/>
          </div>}
        {accion?.accion === "modificar" &&
          <div className="w-full flex items-center justify-center ">
          <ModificarProducto/>
          </div>}
        {accion?.accion === "eliminar" &&
          <div className="w-full flex items-center justify-center ">
          <EliminarProducto/>
          </div>}
        {accion?.accion === "carro" &&
          <div className="w-full flex items-center justify-center ">
          <CarritoCompras/>
          </div>}
      </div>
    </div>
  );
};

export default Modal;
