import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import pedidoContext from "../../context/pedidoContext/pedidoContext";

const PedidoDetails = () => {
  const { pedido, obtenerPedido } = useContext(pedidoContext);
  const order = useParams();
  console.log(pedido);
  console.log(order);

  useEffect(() => {
    obtenerPedido(order.id);
  }, []);
  return (
    <div className="flex flex-col justify-center  mt-10 gap-y-10 mx-auto w-11/12">
    <Link to={'/adminpedido'} className={'bg-black p-2 rounded-md text-white w-fit'}>Volver atrás</Link>
      <p>id: {pedido?._id}</p>
      <p>dirección: {pedido?.direccion}</p>
      <p>tipo de pago:{pedido?.pago}</p>
      <p>recibe: {pedido?.receptor}</p>
      <p>estado: {pedido?.estado}</p>
      <p>Monto a pagar: {pedido?.valor}</p>
      <p>creado desde: {pedido?.fechaini}</p>
      <div className="h-72 overflow-y-auto">
        {pedido?.productos.map((p) => (
          <div className="flex items-center p-2 rounded-md shadow-lg w-fit  gap-x-5">
            <img src={p.img} alt="" className="w-10 h-10 rounded-full" />
            <p>{p.nombre}</p>
            <p>cantidad: {p.cantidad}</p>
            <p>${p.precio}</p>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default PedidoDetails;
