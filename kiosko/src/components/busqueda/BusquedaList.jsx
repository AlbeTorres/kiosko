import React, { useContext, useEffect } from "react";
import productoContext from "../../context/productoContext/productoContext";
import authContext from "../../context/authContext/authContext";
import Producto from "../../components/Producto/Producto";

const BusquedaList = () => {

  let admin;
  const { busqueda, productos, obtenerProductos } =
    useContext(productoContext);

    const {usuario}= useContext(authContext);
  
    usuario!==null ? admin = usuario.isAdmin: admin=false

  let auxProductolist = [];

  useEffect(() => {
    obtenerProductos();
  }, []);

  auxProductolist = productos.filter((producto) => {
    return Object.values(producto)
      .join(" ")
      .toLowerCase()
      .includes(busqueda.toLowerCase());
  });

  console.log(auxProductolist);

  return (
    <div className="absolute w-3/4 h-fit border border-red-800  z-20 top-24 bg-white ">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {auxProductolist.length === 0 ? (
          <h2>No existen resultados que coincidad con su búsqueda</h2>
        ) : (
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {auxProductolist.map((producto) => (
              <Producto key={producto._id} producto={producto} admin={admin} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BusquedaList;
