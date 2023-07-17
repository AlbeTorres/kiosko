import React, { useContext, useEffect } from "react";
import Producto from '../Producto/Producto';





const Tablero = ({productos, usuario, busqueda}) => {
  let admin;
  let productosaux = [{_id:''}];
  let auxProductolist = [{_id:''}];


  usuario!==null ? admin = usuario?.isAdmin: admin=false

  admin === true
    ? (productosaux = productos)
    : (productosaux = productos?.filter(
        (producto) => producto.estado === "abastecido"
      ));

      if(busqueda){
        
        auxProductolist = productosaux.filter((producto) => {
          return Object.values(producto)
            .join(" ")
            .toLowerCase()
            .includes(busqueda.toLowerCase());
        });
      }else{
        auxProductolist= productosaux
      }

  return (
    <div className="my-10 mt-20 w-full">
      <div className="w-full">
        <h2 className="text-2xl py-4 ">Productos</h2>

        <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {auxProductolist?.map((producto) => (
            <Producto key={producto._id} producto={producto} admin={admin}  />
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Tablero;
