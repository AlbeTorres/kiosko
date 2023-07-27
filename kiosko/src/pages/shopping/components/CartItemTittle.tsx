import React from 'react'
import { ItemCart } from '../layout'

export const CartItemTittle = () => (
  <div className='hidden md:block '>
    <ItemCart bg={false}>
      <div></div>
      <p className='font-bold'>Precio</p>
      <p className='font-bold'>Cantidad</p>
      <p className='font-bold'>Total</p>
      <div></div>
    </ItemCart>
  </div>
)
