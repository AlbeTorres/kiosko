import React from "react";

const EliminarProducto = () => {

    const eliminarProducto=()=>{
        console.log('eliminado producto')
    }
  return (
    <div>
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          ¿Está seguro de que desea eliminar este producto?
        </h3>
        <p className="py-4">Nombre del producto</p>
        <div className="modal-action">
          <label htmlFor="my-modal-6" onClick={()=>eliminarProducto()} className="btn btn-secondary ">
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
