import React, { useState, useContext } from 'react'
import productoContext from '../../context/productoContext/productoContext'
import { FaCartPlus, FaMinus, FaPlus } from 'react-icons/fa'
import { socket } from '../../config/socket'
import { toast } from 'react-toastify'

const ButtonMenu = ({ id, estado, admin }) => {
  const { establecerAccion, modificarProducto, agregarCarrito } = useContext(productoContext)

  const [estadoaux, setEstado] = useState(estado)
  const [cantidad, setCantidad] = useState(1)

  const onClick = accion => {
    establecerAccion({ id, accion })
  }

  const modificarEstado = () => {
    socket.emit('estate', id, () => {})

    if (estadoaux === 'abastecido') {
      modificarProducto(id, { estado: 'agotado' })
      setEstado('agotado')
    } else {
      modificarProducto(id, { estado: 'abastecido' })
      setEstado('abastecido')
    }
  }

  const restarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  const añadirCarro = (id, cantidad) => {
    agregarCarrito({ _id: id, cantidad })
  }

  return (
    <div className='w-full'>
      {admin === true ? (
        <div className='absolute right-2 top-2'>
          <div className='dropdown dropdown-end'>
            <button tabIndex={0} className='rounded-md p-2 bg-gray-800 text-white '>
              Menú
            </button>
            {/* <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-fit grid grid-flow-row gap-2">
                    <button onClick={()=>modificarEstado() } className="btn btn-ghost btn-xs">{estadoaux}</button>
                    <label onClick={()=>onClick('modificar')} htmlFor="my-modal-6" className="btn btn-ghost btn-xs">Modificar</label>
                    <label onClick={()=>onClick('eliminar')} htmlFor="my-modal-6" className="btn btn-ghost btn-xs">Eliminar</label>
            </ul> */}
          </div>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center w-full'>
          <div className='my-3'>
            <button
              className='btn btn-ghost btn-md sm:mr-1 '
              onClick={() => setCantidad(cantidad + 1)}
            >
              <FaPlus className='text-xs  sm:text-sm ' />
            </button>
            <input className='w-6  text-center' type='text' readOnly value={cantidad} />
            <button className='btn btn-ghost btn-md  sm:ml-1 ' onClick={restarCantidad}>
              <FaMinus className='text-xs  sm:text-sm ' />
            </button>
          </div>

          <button
            className='btn  w-full text-sm  flex items-center justify-center h-10 '
            onClick={() => añadirCarro(id, cantidad)}
          >
            <span>Añadir</span>
            <FaCartPlus className='ml-1' />
          </button>
        </div>
      )}
    </div>
  )
}

export default ButtonMenu
