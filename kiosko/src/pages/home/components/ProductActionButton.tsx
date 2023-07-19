import { useState } from 'react'
import { FaCartPlus, FaMinus, FaPlus } from 'react-icons/fa'

export const ProductActionButton = ({ id }) => {
  const [cantidad, setCantidad] = useState(1)

  const subtractAmount = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  const addAmount = () => {
    if (cantidad < 100) {
      setCantidad(cantidad + 1)
    }
  }

  function añadirCarro(id: any, cantidad: number): void {
    throw new Error('Function not implemented.')
  }

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='my-3'>
        <button className='btn btn-ghost btn-md sm:mr-1 ' onClick={addAmount}>
          <FaPlus className='text-xs  sm:text-sm ' />
        </button>
        <input className='w-6  text-center' type='text' readOnly value={cantidad} />
        <button className='btn btn-ghost btn-md  sm:ml-1 ' onClick={subtractAmount}>
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
  )
}
