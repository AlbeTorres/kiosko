import React, { useContext, useEffect } from "react";
import Producto from '../Producto/Producto';
import productoContext from "../../context/productoContext/productoContext";
import authContext from '../../context/authContext/authContext';

const Tablero = () => {
  let admin;
  let productosaux = [{_id:''}];
  let auxProductolist = [{_id:''}];

  const { busqueda, productos, obtenerProductos } = useContext(productoContext);
  const {usuario}= useContext(authContext);

  useEffect(() => {
    obtenerProductos();
  }, []);

  usuario!==null ? admin = usuario.isAdmin: admin=false

  admin === true
    ? (productosaux = productos)
    : (productosaux = productos.filter(
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
    <div className="bg-white pt-2 mt-3">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl py-4 ">Productos</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {auxProductolist.map((producto) => (
            <Producto key={producto._id} producto={producto} admin={admin} />
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Tablero;
