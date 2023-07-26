import { Link } from 'react-router-dom'
import { ItemCart } from '../layout'
import { MaxMinButton } from '../../../components-libs/MaxMinButton/MaxMinButton'
import { useContext, useState } from 'react'
import cartContext from '../../../context/productoContext/cartContext'
import { Button } from '../../../components-libs/Button'

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
      <div className='justify-self-start gap-x-2 flex items-center'>
        <figure className='w-16 h-20'>
          <img src={img} alt='' className='w-full h-full object-cover' />
        </figure>
        <div>
          <Link to={`/product/${_id}`}>
            <p className='text-lg'>{nombre}</p>
          </Link>

          <p className='text-gray-400 '>Electronica</p>
        </div>
      </div>
      <p>
        {price}
        <span className='ml-1'>{'cup'}</span>
      </p>
      <MaxMinButton
        cantidad={quantity}
        handleCantidad={handleCantidad}
        button={'square'}
        id={_id}
      />
      <p>
        {price * quantity}
        <span className='ml-1'>{'cup'}</span>
      </p>
      <Button onClick={() => handleDelete(_id)} className='btn-sm w-20 btn-outline '>
        Remove
      </Button>
    </ItemCart>
  )
}
