import React from "react";
import ButtonMenu from "./ButtonMenu";
import NombreProducto from "./NombreProducto";
import ProductoImg from "./ProductoImg";

const Producto = ({producto}) => {

  const {_id, nombre, img, medida}=producto
  return (
    <div className=" grid grid-flow-col grid-cols-3 p-4  place-items-center gap-x-4 w-full">
        <ProductoImg img={img}/>
        <NombreProducto nombre={nombre} medida={medida} />
        <ButtonMenu id={_id} estado={producto.estado} />
        
    </div>
  );
};

export default Producto;
