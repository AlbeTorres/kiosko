import React from 'react'
import PedidoItemProductos from './PedidoItemProductos'

const PedidoItem = ({productos,valor, pago, estado}) => {
    console.log(productos)
  return (
    <div className='flex items-center justify-between p-2 my-2 border-2 rounded-lg  '>
    <div className='flex items-center justify-center rounded-md '>
        <div className='mx-2'>
            <PedidoItemProductos productos={productos}/>
            <div className='flex items-center justify-center'>
                <p className='mr-2'>{valor}<span>{pago}</span></p>
                <p><span>$</span>{estado}</p>
            </div>
        </div>
    </div>
    {/* <div className='flex items-center justify-end text-2xl w-1/2 '>
        <button onClick={()=>eliminar(_id)} className='text-red-600'><FaTrashAlt/></button>
    </div> */}
</div>
  )
}

export default PedidoItem