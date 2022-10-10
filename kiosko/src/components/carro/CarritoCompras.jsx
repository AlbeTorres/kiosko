import React from 'react'
import CarroItem from './CarroItem'


const CarritoCompras = () => {

  const descuento=false

  let compras=[{id:1}, {id:1}, {id:1}, {id:1}, {id:1}, {id:1}, {id:1}, {id:1},{id:1}, {id:1}, {id:1}, {id:1}]

  return (
    <div className="modal-box">
      <h2 className='my-2 text-xl'>Órdenes</h2>
      <div className=' overflow-y-scroll h-72 p-2'>
        {compras.length !=0 ?
          compras.map(producto=><CarroItem/>):
          <h1>Carro vacío</h1>
        }
      </div>

      <div className='my-2'>
          <div className='flex items-center'>
            <h2 className='mr-1'>Monto total:</h2>
            <p><span>$</span>50000</p>
          </div>

          {descuento && 
          <div className='flex items-center text-red-600 '>
            <h2  className='mr-1'>Descuento: </h2>
            <p>-20<span>%</span></p>
          </div>
        }
          <div className='flex items-center '>
            <h2  className='mr-1'>A pagar:</h2>
            <p><span>$</span>50000</p>
          </div>
  
      </div>

      <div className=' flex  items-center mt-5 w-full justify-end'>
        <button className='btn btn-primary mr-3'>Comprar</button>
        <label htmlFor="my-modal-6" className='btn ' onClick={()=>establecerAccionAux('crearproducto')}>Cancelar</label>
      </div>
    </div>
  )
}

export default CarritoCompras