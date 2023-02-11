import React, { useContext, useEffect } from "react";
import PedidoItem from "../../components/pedidos/PedidoItem";
import pedidoContext from "../../context/pedidoContext/pedidoContext";
import { FaArrowLeft } from "react-icons/fa";
import Modal from "../../components/layout/Modal";

const AdminPedidos = () => {
  const { pedidos, obtenerPedidos } = useContext(pedidoContext);

  useEffect(() => {
    obtenerPedidos();
  }, []);

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <div className="flex w-full md:w-11/12 mx-auto items-center justify-between px-2">
          <div className="flex items-center ">
            <button>
              <FaArrowLeft className="text-xl " />
            </button>
            <p className="ml-2 hidden md:block">atrás</p>
          </div>
        </div>
      </div>
      <div className=" px-2 md:w-3/4 md:mx-auto">
        <div className="  overflow-y-auto md:overflow-hidden md:hover:overflow-auto ">
          <h2 className="w-full text-center rounded-t-md text-lg font-bold bg-primary text-white mt-5 p-2">
            Pedidos
          </h2>
          {pedidos.map((pedido) => (
            <PedidoItem
              key={pedido._id}
              id={pedido._id}
              productos={pedido.productos}
              pago={pedido.pago}
              valor={pedido.valor}
              estado={pedido.estado}
            />
          ))}
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default AdminPedidos;
