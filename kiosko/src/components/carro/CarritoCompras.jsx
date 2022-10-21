import React, {useContext, useEffect, useState} from 'react'
import CarroItem from './CarroItem'
import productoContext from '../../context/productoContext/productoContext'
import authContext from '../../context/authContext/authContext'


const CarritoCompras = () => {
  
  const {productos, carrito, obtenerProductos, obtenerCarrito, establecerAccion, eliminarCarrito, modificarProductoCarro}= useContext(productoContext);

  const {autenticado}=useContext(authContext);


  let a_pagar=0
  let compras=[]
  let monto_total=0
  let descuento=false
  let descuento_valor=0

  useEffect(()=>{
    obtenerCarrito();
  },[])
  

  const establecerAccionAux=(accion)=>{

  }

  const modi=(_id, cantidad)=>{
    modificarProductoCarro(_id, cantidad)
  }

  const eliminar=(id)=>{
    console.log('delete')
    eliminarCarrito(id)
  }


  const onComprar=()=>{
    if(autenticado){
      //crea pedido
      //almacena pedido en context
      //navega hasta pagina pedidoForm
      alert('you dont have enougth money')
    }else{

      establecerAccion({accion:'login'})
    }

  }
  
  productos.map(producto=>{
    carrito.map(carro=>carro._id===producto._id && compras.push({...producto,cantidad:carro.cantidad}))
    
  })

  compras.map(compra=>monto_total= monto_total+compra.precio*compra.cantidad)

  descuento!==true ? a_pagar= monto_total: a_pagar= monto_total-descuento_valor



  return (
    <div className="modal-box">
      <h2 className='my-2 text-xl'>Órdenes</h2>
      <div className=' overflow-y-scroll h-72 p-2'>
        {compras.length !=0 ?
          compras.map(producto=><CarroItem key={producto._id} producto={producto}  modi={modi} eliminar={eliminar} />):
          <h1>Carro vacío</h1>
        }
      </div>

      <div className='my-2'>
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
  
      </div>

      <div className='flex  items-center mt-5 w-full justify-end'>
        <label htmlFor="my-modal-6"  className='btn btn-primary mr-3' onClick={onComprar}>Comprar</label>
        <label htmlFor="my-modal-6" className='btn ' onClick={()=>establecerAccionAux('crearproducto')}>Cancelar</label>
      </div>
    </div>
  )
}

export default CarritoCompras