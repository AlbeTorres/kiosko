import React, { useEffect, useContext, useState, useCallback } from "react";
import productoContext from "../../../context/productoContext/productoContext";
import { socket } from '../../../config/socket'

const EliminarProducto = () => {

  const { accion,obtenerProducto, producto, eliminarProducto} = useContext(productoContext);

  useEffect(() => {
    obtenerProducto(accion?.id);

  }, [accion]);

    const eliminarProductoAux=()=>{
      socket.emit('estate',accion.id,()=>{
           
      })
        eliminarProducto(accion.id)
    }
  return (
    <div>
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          ¿Está seguro de que desea eliminar este producto?
        </h3>
        <p className="py-4">{producto?.nombre}</p>
        <div className="modal-action">
          <label htmlFor="my-modal-6" onClick={()=>eliminarProductoAux()} className="btn btn-secondary ">
            Eliminar
          </label>
          <label htmlFor="my-modal-6" className="btn">
            Cancelar
          </label>
        </div>
      </div>
    </div>
  );
};

export default EliminarProducto;
