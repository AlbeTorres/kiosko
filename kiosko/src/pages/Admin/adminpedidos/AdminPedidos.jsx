import React, { useContext, useEffect, useState, useCallback } from "react";
import PedidoItem from "../../../components/pedidos/PedidoItem";
import pedidoContext from "../../../context/pedidoContext/pedidoContext";
import { FaArrowLeft } from "react-icons/fa";
import Modal from "../../../components/layout/Modal";
import {useNavigate} from 'react-router-dom'
import { socket } from '../../../config/socket'

const AdminPedidos = () => {

  const { pedidos, obtenerPedidos } = useContext(pedidoContext);
  const history= useNavigate();


  const [pedidoState, setPedidoState]=useState({})

  let aux = 0;

  if (pedidos != null) {
    aux = pedidos;
  }

  function obtenerPedidosCallback() {
    if (aux === 0) {
      console.log("eso");
    }

    if (aux != 0) {
      setPedidoState({
        cancelados:pedidos?.filter(pedido=>pedido.estado==='cancelado'),
        enviados:pedidos?.filter(pedido=>pedido.estado==='enviado'),
        terminados:pedidos?.filter(pedido=>pedido.estado==='terminado'),
        verificar:pedidos?.filter(pedido=>pedido.estado==='verificar'),
      })
    }
  }

  const eso = useCallback(() => obtenerPedidosCallback(), [aux]);

  useEffect(() => {
    obtenerPedidos();
    eso();

   
   
  }, [eso]);

  const token = localStorage.getItem("token");

  
  useEffect(()=>{

    socket.on('newpedido',(msg)=>{
      obtenerPedidos();
      toast.success(msg)
    })
    
    obtenerPedidos();
  },[token])

  
 

  const {cancelados, enviados, terminados, verificar}= pedidoState

  return (
    <div>
      <div className="navbar bg-gray-800 text-primary-content">
        <div className="flex w-full md:w-11/12 mx-auto items-center justify-between px-2">
          <div className="flex items-center ">
            <button onClick={()=>history('/')}>
              <FaArrowLeft className="text-xl " />
            </button>
            <p className="ml-2 hidden md:block">atrás</p>
          </div>
        </div>
      </div>
      <div className=" px-2 md:w-3/4 md:mx-auto lg:grid lg:grid-cols-2 lg:gap-4">
        <div className=" ">
          <h2 className="w-full text-center rounded-t-md text-lg font-bold bg-gray-600 text-white mt-5 p-2">
            Nuevos pedidos
          </h2>
          <div className="w-full lg:h-96 overflow-y-auto">
          {verificar?.map((pedido) => (
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
        <div className=" ">
          <h2 className="w-full text-center rounded-t-md text-lg font-bold bg-green-600 text-white mt-5 p-2">
           Enviados
          </h2>
          <div className="w-full lg:h-96 overflow-y-auto">
          {enviados?.map((pedido) => (
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
        <div className="  ">
          <h2 className="w-full text-center rounded-t-md text-lg font-bold bg-primary text-white mt-5 p-2">
            Terminados
          </h2>
          <div className="w-full lg:h-96 overflow-y-auto">
          {terminados?.map((pedido) => (
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
        <div className="mb-5 ">
          <h2 className="w-full text-center rounded-t-md text-lg font-bold bg-red-500 text-white mt-5 p-2">
            Cancelados
          </h2>
          <div className="w-full lg:h-96 overflow-y-auto">
          {cancelados?.map((pedido) => (
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
      </div>
      <Modal />
    </div>
  );
};

export default AdminPedidos;
