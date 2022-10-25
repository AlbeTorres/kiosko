import React, {useState} from "react";

const Pedido = () => {

  const [visible, setVisible]=useState(false)

  let pedido = {
    productos: [
      { nombre: "platano", cantida: 10, paga: 300 },
      { nombre: "platano", cantida: 10, paga: 300 },
      { nombre: "platano", cantida: 10, paga: 300 },
      { nombre: "platano", cantida: 10, paga: 300 },
      { nombre: "platano", cantida: 10, paga: 300 },
      { nombre: "platano", cantida: 10, paga: 300 },
      { nombre: "platano", cantida: 10, paga: 300 },
      { nombre: "platano", cantida: 10, paga: 300 },
      { nombre: "platano", cantida: 10, paga: 300 },
      { nombre: "platano", cantida: 10, paga: 300 },
      { nombre: "platano", cantida: 10, paga: 300 },
      { nombre: "platano", cantida: 10, paga: 300 },
      { nombre: "platano", cantida: 10, paga: 300 },
      { nombre: "platano", cantida: 10, paga: 300 },
      { nombre: "platano", cantida: 10, paga: 300 },
    ],
  };
  let dir = "Calle 50 D entre 11 y 15 #1118";
  let recive = " Albe";
  let contact = +53645555;
  let pago = "Efectivo/CUP";
  let factura = 3000;
  let estado= 'sin pagar'
  return (
    <div className=" hidden md:block  px-11  " >
    
    <h2 className=" text-xl font-semibold my-5 ">Factura</h2>
    <div className=" grid grid-rows-5 gap-6  w-full md:w-3/4">

      <div className="border-b  ">
        <p className="text-xs ">Dirección:</p>
        <span className="font-semibold ml-10 mt-4 ">{dir}</span>
      </div>
      <div className="border-b  ">
        <p className="text-xs ">Nombre:</p>
        <span className="font-semibold ml-10 mt-4 ">{recive}</span>
      </div>
      <div className="border-b  ">
        <p className="text-xs ">Contácto:</p>
        <span className="font-semibold ml-10 mt-2 ">{contact}</span>
      </div>
      <div className="border-b  ">
        <p className="text-xs ">Pago:</p>
        <span className="font-semibold ml-10 mt-2 ">{pago}</span>
      </div>
      <div className="border-b  ">
        <p className="text-xs ">A pagar</p>
        <span className="font-semibold ml-10 mt-2 ">{factura}</span>
      </div>
    </div>
    <button onClick={()=>setVisible(!visible)} className="text-gray-400   mt-5">{visible ? 'ocultar':'mostrar más'}</button>
    { visible &&

      <div className=" mt-5 w-full md:w-3/4 ">
       <p className="text-xs">Carro</p>
        {pedido.productos.map((producto) => (
          <div className=" flex my-4 border-b  ">
          <label className="mr-2">prod:</label>
            <p className="mr-4">{producto.nombre}</p>
          <label className="mr-2">cant:</label>
            <p className="mr-4">{producto.cantida}</p>
          <label className="mr-2">$</label>
            <p className="mr-4">{producto.paga}</p>
          </div>
        ))}
      </div>
    }
    </div>
  );
};

export default Pedido;
