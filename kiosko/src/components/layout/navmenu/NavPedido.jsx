import React, {useContext, useEffect} from "react";
import pedidoContext from "../../../context/pedidoContext/pedidoContext";
import productoContext from "../../../context/productoContext/productoContext";
import authContext from '../../../context/authContext/authContext'
import {FaShippingFast} from 'react-icons/fa'

const NavPedido = () => {

    const {pedidos, obtenerPedidos}= useContext(pedidoContext)
    const { establecerAccion}= useContext(productoContext);
    const {usuario}= useContext(authContext)

    let monto = 0
    
    
    useEffect(()=>{
        obtenerPedidos()
    },[])
    
    let pedidosaux= pedidos?.filter(pedido=>pedido.usuario===usuario._id)
    let cantida = pedidosaux.length
    pedidosaux?.map( pedido=> monto = monto + pedido?.valor  )


  const establecerAccionAux=(accion)=>{
    establecerAccion({accion})

  }

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={1} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <FaShippingFast
           
            className="h-5 w-5"
           >
           
          </FaShippingFast>
          {cantida!==0 &&  
          <span className="badge badge-sm indicator-item">{cantida} </span>}
        </div>
      </label>
      <div
        tabIndex={1}
        className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg">{cantida} { cantida > 1 ? 'pedidos' : 'pedido' } </span>
          <span className="text-info">Subtotal: ${monto} </span>
          <div className="card-actions">
            <label  htmlFor="my-modal-6" 
            onClick={() => establecerAccionAux("pedido")}
            className="btn btn-primary btn-block">Ver pedidos</label>
          </div>
        </div>
      </div>
      </div>
  )
}

export default NavPedido