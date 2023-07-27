import React from 'react'
import { ItemCart } from '../layout'

type CartItemTotalProps = {
  cantidad: number
  total: number
}

export const CartItemTotal = ({ cantidad, total }: CartItemTotalProps) => {
  return (
    <div className=' md:mt-5'>
      <ItemCart bg={false}>
        <div></div>
        <p className='font-bold '>Orden total:</p>
        <p className='font-bold '>
          <span className='md:hidden mr-1'>Cantidad:</span>
          {cantidad}
        </p>
        <p className='font-bold '>
          <span className='md:hidden mr-1'>Total:</span>
          {total}
          <span className='ml-1'>cup</span>
        </p>
        <div></div>
      </ItemCart>
    </div>
  )
}
