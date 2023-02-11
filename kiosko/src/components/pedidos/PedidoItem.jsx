import React, { useContext, useEffect, useState } from "react";
import PedidoItemProductos from "./PedidoItemProductos";
import authContext from "../../context/authContext/authContext";
import pedidoContext from "../../context/pedidoContext/pedidoContext";

import { FaTrashAlt } from "react-icons/fa";

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
          <div className="flex items-center justify-end text-2xl w-1/2 mr-5 ">
          <button onClick={()=>handleEditPedido('enviado')} className="text-red-600">
            <FaTrashAlt />
          </button>
          <button onClick={()=>handleEditPedido('terminado')} className="text-red-600">
            <FaTrashAlt />
          </button>
          <button onClick={()=>handleEditPedido('cancelado')} className="text-red-600">
            <FaTrashAlt />
          </button>
          </div>
        ) : (
          <div className="flex items-center justify-end text-2xl w-1/2 mr-5 ">
          <button onClick={()=>handleEditPedido('cancelado')} className="text-red-600">
            <FaTrashAlt />
          </button>
          </div>
        )}
      
    </div>
  );
};

export default PedidoItem;
