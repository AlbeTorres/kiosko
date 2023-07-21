import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import cn from '../../util/cn'

type MaxMinButtonProps = {
  cantidad: number
  setCantidad(cantidad: number): void
  button: 'ghost' | 'square'
}

const className = {
  button: {
    ghost: 'btn btn-ghost btn-md ',
    square: 'btn btn-square btn-md ',
  },
}

export const MaxMinButton = ({ cantidad, setCantidad, button }: MaxMinButtonProps) => {
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
  return (
    <div className='my-3'>
      <button className={cn(className.button[button], 'sm:mr-1 ')} onClick={addAmount}>
        <FaPlus className='text-xs  sm:text-sm ' />
      </button>
      <input className='w-6  text-center' type='text' readOnly value={cantidad} />
      <button className={cn(className.button[button], 'sm:ml-1 ')} onClick={subtractAmount}>
        <FaMinus className='text-xs  sm:text-sm ' />
      </button>
    </div>
  )
}
