import { Link } from 'react-router-dom'

import { MaxMinButton } from '../../../components-libs/MaxMinButton/MaxMinButton'
import { Button } from '../../../components-libs/Button'
import { ItemCart } from './ItemCart.layout'

type CartItemProps = {
  _id: string
  nombre: string
  price: number
  quantity: number
  img: string
  bg: boolean
  handleCantidad(id: string, cantidad: number): void
  handleDelete(_id: string): void
}

export const CartItem = ({
  _id,
  nombre,
  price,
  quantity,
  img,
  bg,
  handleCantidad,
  handleDelete,
}: CartItemProps) => {
  return (
    <ItemCart bg={bg}>
      <div className='md:justify-self-start w-full gap-x-2 flex items-center'>
        <figure className='w-16 h-20'>
          <img src={img} alt='' className='w-full h-full object-cover' />
        </figure>
        <div className='w-full'>
          <Link to={`/product/${_id}`}>
            <p className='text-lg underline text-primary'>{nombre}</p>
          </Link>

          <p className='text-gray-400 '>Electronica</p>
        </div>
      </div>
      <p>
        <span className='md:hidden mr-1 font-bold'>Precio:</span>
        {price}
        <span className='ml-1'>{'cup'}</span>
      </p>
      <div className='flex items-center'>
        <p className='md:hidden mr-1 font-bold'>Cantidad:</p>
        <MaxMinButton
          cantidad={quantity}
          handleCantidad={handleCantidad}
          button={'square'}
          id={_id}
        />
      </div>
      <p>
        <span className='md:hidden mr-1 font-bold'>Total:</span>
        {price * quantity}
        <span className='ml-1'>{'cup'}</span>
      </p>
      <Button onClick={() => handleDelete(_id)} className='btn-sm w-20 !btn-outline '>
        Remove
      </Button>
    </ItemCart>
  )
}
