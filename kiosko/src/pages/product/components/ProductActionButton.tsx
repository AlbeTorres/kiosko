import { useContext, useState } from 'react'
import { FaCartPlus, FaMinus, FaPlus } from 'react-icons/fa'
import cartContext from '../../../context/productoContext/cartContext'
import { MaxMinButton } from '../../../components-libs/MaxMinButton/MaxMinButton'
import { Button } from '../../../components-libs/Button'

type ProductActionButtonProps = {
  _id: string
}

export const ProductActionButton = ({ _id }: ProductActionButtonProps) => {
  const context = useContext(cartContext)
  const [cantidad, setCantidad] = useState(1)

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <MaxMinButton
        className='my-3 '
        cantidad={cantidad}
        setCantidad={setCantidad}
        button={'ghost'}
      />
      <Button
        className=' btn-primary btn-sm  w-full text-xs  flex items-center justify-center'
        onClick={() => context?.addCart({ _id, cantidad })}
      >
        <span>Añadir</span>
        <FaCartPlus className='ml-1' />
      </Button>
    </div>
  )
}
