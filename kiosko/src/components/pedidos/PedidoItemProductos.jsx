import React from "react";

const PedidoItemProductos = ({ productos }) => {

  let count = 0;
  let more=false
  let cant=0
  return (
    <div className="avatar-group -space-x-6">
      {productos.map((producto, index) => {

          if(count < 3){
            count= count +1
            return(

            <div key={index} className="avatar">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={producto.img} />
              </div>
            </div>
            )

          }else{
            more=true
            cant= productos.length-3
          }
      }
      )}

      {more && 
      <div className="avatar placeholder">
        <div className="w-12 bg-neutral-focus text-neutral-content">
          <span>{`+${cant}`}</span>
        </div>
      </div>}
    </div>
  );
};

export default PedidoItemProductos;
