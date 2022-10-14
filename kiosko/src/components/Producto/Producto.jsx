import React from "react";
import ButtonMenu from "./ButtonMenu";
import NombreProducto from "./NombreProducto";
import ProductoImg from "./ProductoImg";

const Producto = ({producto, admin}) => {

  const {_id, nombre, img, medida, estado}=producto
  return (
    <div className=" grid grid-flow-col grid-cols-3 p-4 place-items-center gap-x-4 w-full">
        <ProductoImg img={img}/>
        <NombreProducto nombre={nombre} medida={medida} />
        <ButtonMenu id={_id} estado={estado} admin={admin} />
        
    </div>
  );
};

export default Producto;
