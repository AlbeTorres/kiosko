import React from "react";

const PedidoItemProductos = ({ productos }) => {
  return (
    <div className="avatar-group -space-x-6">
      {productos.map((producto, index) => {
        return(

        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={producto.img} />
          </div>
        </div>
        )
      }
      )}
      <div className="avatar placeholder">
        <div className="w-12 bg-neutral-focus text-neutral-content">
          <span>+99</span>
        </div>
      </div>
    </div>
  );
};

export default PedidoItemProductos;
