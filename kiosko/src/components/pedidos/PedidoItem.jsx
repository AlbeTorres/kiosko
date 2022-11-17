import React from 'react'
import PedidoItemProductos from './PedidoItemProductos'
import { FaTrashAlt } from 'react-icons/fa'

const PedidoItem = ({productos,valor, pago, estado}) => {
    
  return (
    <div className='flex items-center justify-between p-2 my-2 border-2 rounded-lg  '>
    <div className='flex items-center justify-center rounded-md '>
        <div className='mx-2'>
            <PedidoItemProductos productos={productos}/>
            <div className='flex items-center justify-start'>
                <p className='mr-2'>{'$'}<span>{valor}</span></p>
                <p className='mr-2'>{pago}</p>
                <p>{estado}</p>
            </div>
        </div>
    </div>
     {/* <div className='flex items-center justify-end text-2xl w-1/2 mr-5 '>
        <button  className='text-red-600'><FaTrashAlt/></button>
    </div>  */}
</div>
  )
}

export default PedidoItem