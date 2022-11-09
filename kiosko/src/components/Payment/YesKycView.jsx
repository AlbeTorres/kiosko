import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'

const YesKycView = () => {
  return (
    <div className="modal-box card-body" >
    <div className="flex items-center text-xl text-center justify-center">
        <FaCheckCircle className="text-green-600"/>
        <h2 className="ml-2">Pedido creado y en camino a ser entregado</h2>
    </div>
     <Link to={'/'}  className="btn">
            Continuar
          </Link>
    </div>
  )
}

export default YesKycView