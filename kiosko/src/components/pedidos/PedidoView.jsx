import React,{useContext} from 'react'
import pedidoContext from '../../context/pedidoContext/pedidoContext'
import PedidoItem from './PedidoItem'

const PedidoView = () => {

  const {pedidos}= useContext(pedidoContext)

  console.log(pedidos)
  
  return (
    <div className="modal-box">
      <h2 className='my-2 text-xl'>Pedidos:</h2>
      <div className=' overflow-y-scroll h-72 p-2'>
        {
          pedidos.map(pedido=><PedidoItem key={pedido._id} productos={pedido.productos}  pago={pedido.pago} valor={pedido.valor} estado={pedido.estado} />)
          
        }
      </div>

      {/* <div className='my-2'>
          <div className='flex items-center'>
            <h2 className='mr-1'>Monto total:</h2>
            <p><span>$</span>{monto_total}</p> 
          </div>

          {descuento && 
          <div className='flex items-center text-red-600 '>
            <h2  className='mr-1'>Descuento: </h2>
            <p>-20<span>%</span></p>
          </div>
        }
          <div className='flex items-center '>
            <h2  className='mr-1'>A pagar:</h2>
            <p><span>$</span>{a_pagar}</p>
          </div>
  
      </div> */}

      <div className='flex  items-center mt-5 w-full justify-end'>
        
        <label htmlFor="my-modal-6" className='btn' >Cerrar</label>
      </div>
    </div>
  )
}

export default PedidoView