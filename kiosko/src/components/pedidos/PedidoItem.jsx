import React, { useContext, useEffect, useState } from "react";
import PedidoItemProductos from "./PedidoItemProductos";
import authContext from "../../context/authContext/authContext";
import pedidoContext from "../../context/pedidoContext/pedidoContext";

import { FaTrashAlt, FaCheck, FaCheckDouble } from "react-icons/fa";

const PedidoItem = ({id, productos, valor, pago, estado }) => {
  const { usuario, usuarioAutenticado } = useContext(authContext);
  const { modificarPedido } = useContext(pedidoContext);

  const [pedidostate, setPedidoState]=useState(estado)

  useEffect(()=>{
    usuarioAutenticado()
  },[])


  const handleEditPedido=(estado)=>{
    modificarPedido(id,{estado})
    setPedidoState(estado)
  }

  return (
    <div className="flex items-center justify-between xs:p-2 my-2 border-2 rounded-lg  ">
      <div className="flex items-center justify-center rounded-md ">
        <div className="mx-2">
          <PedidoItemProductos productos={productos} />
          <div className="flex items-center justify-start">
            <p className="mr-2">
              {"$"}
              <span>{valor}</span>
            </p>
            <p className="mr-2">{pago}</p>
            <p>{pedidostate}</p>
          </div>
        </div>
      </div>
      
        {usuario?.isAdmin ? (
          <div className="flex items-center justify-end text-2xl w-1/2 mr-5 space-x-4 lg:space-x-7 ">
          <button onClick={()=>handleEditPedido('cancelado')} className="text-red-600 w-5 h-5 ">
            <FaTrashAlt className="w-full h-full" />
          </button>
          <button onClick={()=>handleEditPedido('terminado')} className="text-blue-600 w-5 h-5">
            <FaCheckDouble className="w-full h-full" />
          </button>
          <button onClick={()=>handleEditPedido('enviado')} className="text-green-600 w-5 h-5">
            <FaCheck className="w-full h-full" />
          </button>
          </div>
        ) : (
          <div className="flex items-center justify-end text-2xl w-1/2 mr-5 ">
          <button onClick={()=>handleEditPedido('cancelado')} className="text-red-600 w-5 h-5">
            <FaTrashAlt className="w-full h-full" />
          </button>
          </div>
        )}
      
    </div>
  );
};

export default PedidoItem;
