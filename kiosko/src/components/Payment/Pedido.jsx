import React, {useState} from "react";

const Pedido = ({productos,direccion, pago, receptor, movil, valor }) => {

  const [visible, setVisible]=useState(false)


  // let pago = "Efectivo/CUP";
 
  return (
    <div className=" hidden md:block  px-11  " >
    
    <h2 className=" text-xl font-semibold my-5 ">Factura</h2>
    <div className=" grid grid-rows-5 gap-6  w-full md:w-3/4">

      <div className="border-b  ">
        <p className="text-xs ">Dirección:</p>
        <span className="font-semibold ml-10 mt-4 ">{direccion}</span>
      </div>
      <div className="border-b  ">
        <p className="text-xs ">Nombre:</p>
        <span className="font-semibold ml-10 mt-4 ">{receptor}</span>
      </div>
      <div className="border-b  ">
        <p className="text-xs ">Contácto:</p>
        <span className="font-semibold ml-10 mt-2 ">{movil}</span>
      </div>
      <div className="border-b  ">
        <p className="text-xs ">Pago:</p>
        <span className="font-semibold ml-10 mt-2 ">{pago}</span>
      </div>
      <div className="border-b  ">
        <p className="text-xs ">A pagar</p>
        <span className="font-semibold ml-10 mt-2 ">{valor}</span>
      </div>
    </div>
    <button onClick={()=>setVisible(!visible)} className="text-gray-400   mt-5">{visible ? 'ocultar':'mostrar más'}</button>
    { visible &&

      <div className=" mt-5 w-full md:w-3/4 ">
       <p className="text-xs">Carro</p>
        {productos.map((producto) => (
          <div className=" flex my-4 border-b  ">
          <label className="mr-2">prod:</label>
            <p className="mr-4">{producto.nombre}</p>
          <label className="mr-2">cant:</label>
            <p className="mr-4">{producto.cantidad}</p>
          <label className="mr-2">$</label>
            <p className="mr-4">{producto.precio}</p>
          </div>
        ))}
      </div>
    }
    </div>
  );
};

export default Pedido;
