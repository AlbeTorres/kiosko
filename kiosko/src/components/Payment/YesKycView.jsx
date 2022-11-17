import React,{useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'
import pedidoContext from '../../context/pedidoContext/pedidoContext'

const YesKycView = () => {
const history= useNavigate()
  const { setVisible}= useContext(pedidoContext)

  const onSubmit=()=>{
    setVisible(false)
    history('/')
  }

  return (
    <div className="modal-box card-body" >
    <div className="flex items-center text-xl text-center justify-center">
        <FaCheckCircle className="text-green-600"/>
        <h2 className="ml-2">Pedido creado y en camino a ser entregado</h2>
    </div>
     <button onClick={onSubmit}  className="btn">
            Continuar
          </button>
    </div>
  )
}

export default YesKycView