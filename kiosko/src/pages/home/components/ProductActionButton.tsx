import { useContext, useState } from 'react'
import { FaCartPlus, FaMinus, FaPlus } from 'react-icons/fa'
import cartContext from '../../../context/productoContext/cartContext'
import { MaxMinButton } from '../../../components-libs/MaxMinButton/MaxMinButton'
import { Button } from '../../../components-libs/Button'

export const ProductActionButton = ({ _id }) => {
  const { addCart } = useContext(cartContext)
  const [cantidad, setCantidad] = useState(1)

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <MaxMinButton cantidad={cantidad} setCantidad={setCantidad} button={'ghost'} />
      <Button
        className='btn btn-primary  w-full text-sm  flex items-center justify-center h-10 '
        onClick={() => addCart({ _id, cantidad })}
      >
        <span>Añadir</span>
        <FaCartPlus className='ml-1' />
      </Button>
    </div>
  )
}
