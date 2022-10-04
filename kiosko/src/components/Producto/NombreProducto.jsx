import React from "react";

const NombreProducto = ({nombre, medida}) => {
  return (
    <div>
      <div className="font-bold">{nombre}</div>
      <div className="text-sm opacity-50">Precio/{medida}</div>
    </div>
  );
};

export default NombreProducto;
