import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import productoContext from "../../context/productoContext/productoContext";
import PayNav from "../../components/Payment/PayNav";
import PayContainer from '../../components/Payment/PayContainer'
import PayForm from '../../components/Payment/PayForm'
import Pedido from "../../components/Payment/Pedido";
import pedidoContext from '../../context/pedidoContext/pedidoContext'
import authContext from '../../context/authContext/authContext'
import alertaContext from '../../context/alertaContext/alertaContext'

import ModalPayment from "../../components/Payment/ModalPayment";
import {socket} from '../../config/socket'

const Paymen = () => {

  const history= useNavigate();

  const { establecerAccion } = useContext(productoContext);
  const {visible,pedido, setVisible,obtenerPedido, crearPedido}= useContext(pedidoContext)
  const {usuario}= useContext(authContext)
   const {alerta, mostrarAlerta}= useContext(alertaContext);

  
  
  const [factura, setFactura]=useState({
    productos:pedido?.productos,
    direccion: '', 
    pago:'', 
    receptor:'',
    movil:'',
    valor:pedido?.valor,
    usuario:usuario?._id,
    estado:'verificar'
  })


  const {productos,direccion, pago, receptor, movil, valor }=factura

  useEffect(()=>{
    
    pedido.productos.length===0 && history('/')
    
    
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

    if(direccion==='' || pago==='' || receptor==='' || movil===''){
      mostrarAlerta('Debes completar todos los campos', 'error')
      return
    }

    if(!usuario.kyc){ establecerAccionAux('nokyc') 
    setVisible(true)
    }
    else{
      socket.emit('pedido','eso')
      crearPedido(factura)
      establecerAccionAux('yeskyc') } 
      setVisible(true)
    
  }

  const cancelarPedido=()=>{
    setFactura({
      productos:'',
      direccion: '', 
      pago:'', 
      receptor:'',
      movil:'',
      valor:'',
      usuario:'',
      estado:'verificar'
  })
    history('/')

  }

  

  return (
    <div >
     <PayNav/>
     {alerta && <div className={`bg-red-600 text-center p-2 text-white`}>{alerta.msg} </div>}
     <PayContainer>
      <PayForm cancelar={cancelarPedido} onChange={onChange} onChecked={onChecked} direccion={direccion} pago={ pago} receptor={ receptor } movil={ movil} valor={valor} onSubmit={onSubmit} />
      <Pedido productos={productos} direccion={direccion} pago={pago} receptor={ receptor } movil={ movil} valor={valor} />
     </PayContainer>
     { visible && <ModalPayment/>}

    </div>
  );
};

export default Paymen;
