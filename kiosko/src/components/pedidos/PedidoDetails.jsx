import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import pedidoContext from "../../context/pedidoContext/pedidoContext";

const PedidoDetails = () => {
  const { pedido, obtenerPedido } = useContext(pedidoContext);
  const order = useParams();

  useEffect(() => {
    obtenerPedido(order.id);
  }, []);
  return (
    <div className="w-full">
      <div className="flex lg:flex-row justify-center   flex-col mt-10 gap-10 mx-auto w-11/12">
        <div className="flex flex-col gap-5 w-full">
          <div className="border-b-2 pb-2">
            <h3 className="font-semibold ">Dirección: </h3>
            <p className="pl-5">{pedido?.direccion}</p>
          </div>
          <div className="border-b-2 pb-2">
            <h3 className="font-semibold ">Tipo de pago: </h3>
            <p className="pl-5">{pedido?.pago}</p>
          </div>
          <div className="border-b-2 pb-2">
            <h3 className="font-semibold ">Recibe: </h3>
            <p className="pl-5">{pedido?.receptor}</p>
          </div>
          <div className="border-b-2 pb-2">
            <h3 className="font-semibold ">Estado: </h3>
            <p className="pl-5">{pedido?.estado}</p>
          </div>
          <div className="border-b-2 pb-2">
            <h3 className="font-semibold ">Monto a pagar: </h3>
            <p className="pl-5">{pedido?.valor} cup</p>
          </div>
          <div className="border-b-2 pb-2">
            <h3 className="font-semibold ">Creado desde: </h3>
            <p className="pl-5">{pedido?.fechaini}</p>
          </div>
        </div>

        <div className="h-72 overflow-y-auto  w-full">
          {pedido?.productos.map((p) => (
            <div className="flex items-center justify-between p-2 rounded-md shadow-lg md:w-96 lg:w-[30rem] gap-x-5">
              <img src={p.img} alt="" className="w-10 h-10 rounded-full" />
              <p>{p.nombre}</p>
              <p>cantidad: {p.cantidad}</p>
              <p>${p.precio}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto w-11/12 my-10 flex justify-end">
        <Link to={"/adminpedido"} className={"btn"}>
          Volver atrás
        </Link>
      </div>
    </div>
  );
};

export default PedidoDetails;
