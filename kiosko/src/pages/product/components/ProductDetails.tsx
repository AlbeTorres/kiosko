import { useContext, useState } from 'react'
import { MaxMinButton } from '../../../components-libs/MaxMinButton/MaxMinButton'
import { Button } from '../../../components-libs/Button'
import { FaCartPlus } from 'react-icons/fa'
import cartContext from '../../../context/productoContext/cartContext'

export const ProductDetails = ({ _id }) => {
  const [cantidad, setCantidad] = useState(1)
  const { addCart } = useContext(cartContext)
  return (
    <div className='pt-8 relative flex flex-col gap-y-10 h-[28rem] lg:h-full'>
      <div>
        <p>{'Categoría'}</p>
        <h3 className='text-2xl ml-5 font-semibold  '>{'Alimentos'}</h3>
      </div>
      <div>
        <p>Precio</p>
        <div className='flex gap-x-2'>
          <h2 className='text-3xl ml-5 font-semibold '>
            {10000}
            <span className='ml-1'>{'cup'}</span>
          </h2>
          <h4 className='text-red-500 text-2xl  line-through mt-2'>
            {20000}
            <span className='ml-1'>{'cup'}</span>
          </h4>
        </div>
      </div>

      <div className='absolute w-full bottom-5'>
        <div className='w-full flex items-center mb-10 justify-between'>
          <p>Seleccione la cantidad</p>
          <MaxMinButton cantidad={cantidad} setCantidad={setCantidad} button={'square'} />
        </div>
        <Button
          className='btn  w-full text-sm  flex items-center justify-center h-10 '
          onClick={() => addCart({ _id, cantidad })}
        >
          <span>Añadir</span>
          <FaCartPlus className='ml-1' />
        </Button>
      </div>
    </div>
  )
}
