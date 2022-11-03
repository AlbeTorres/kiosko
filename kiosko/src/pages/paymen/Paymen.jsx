import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import productoContext from "../../context/productoContext/productoContext";
import PayNav from "../../components/Payment/PayNav";
import PayContainer from '../../components/Payment/PayContainer'
import PayForm from '../../components/Payment/PayForm'
import Pedido from "../../components/Payment/Pedido";
import pedidoContext from '../../context/pedidoContext/pedidoContext'
import authContext from '../../context/authContext/authContext'

const Paymen = () => {

  const history= useNavigate();

  const { establecerAccion } = useContext(productoContext);
  const {pedido,obtenerPedido, crearPedido}= useContext(pedidoContext)
  const {usuario}= useContext(authContext)

  

  const [factura, setFactura]=useState({
    productos:pedido?.productos,
    direccion: pedido?.direccion, 
    pago:pedido?.pago, 
    receptor:pedido?.receptor,
    movil:pedido?.movil,
    valor:pedido?.valor
  })


  const {productos,direccion, pago, receptor, movil, valor }=factura

  useEffect(()=>{
    
    !pedido && history('/')
    
   },[]);


  const establecerAccionAux = (accion) => {
    establecerAccion({ accion });
    
  };

  const onChange=e=>{
    setFactura({
      ...factura,
      [e.target.name]:e.target.value
    })
  }

  const onChecked=e=>{

    console.log('check')
      setFactura({
        ...factura,
        [e.target.name]:e.currentTarget.checked
      })
  }

  const onSubmit=e=>{
    e.preventDefault()
    console.log('pedido')
  }

  

  return (
    <div >
     <PayNav/>
     <PayContainer>
      <PayForm onChange={onChange} onChecked={onChecked} direccion={direccion} pago={ pago} receptor={ receptor } movil={ movil} valor={valor} onSubmit={onSubmit} />
      <Pedido productos={productos} direccion={direccion} pago={ pago} receptor={ receptor } movil={ movil} valor={valor} />
     </PayContainer>

    </div>
  );
};

export default Paymen;
