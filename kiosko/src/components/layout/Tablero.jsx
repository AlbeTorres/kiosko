import React, { useContext, useEffect } from "react";
import Producto from '../Producto/Producto';
import productoContext from "../../context/productoContext/productoContext";
import authContext from '../../context/authContext/authContext';

const Tablero = () => {
  let admin;
  let productosaux = [{_id:''}];

  const { productos, obtenerProductos } = useContext(productoContext);
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

  return (
    <div className="px-4 pt-4 md:w-1/2">
      <h2 className="m-4  text-2xl font-semibold">Productos que Ofertamos</h2>
      <div className="w-full overflow-y-scroll h-screen md:h-96 grid grid-flow-row gap-y-4 mt-5 place-items-start auto-rows-min  ">
        {productosaux.map((producto) => (
          <Producto key={producto._id} producto={producto} admin={admin} />
        ))}
      </div>
    </div>
  );
};

export default Tablero;
