import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import cn from '../../util/cn'

type MaxMinButtonProps = {
  cantidad: number
  setCantidad(cantidad: number): void
  button: 'ghost' | 'square'
  className?: string
}

const style = {
  button: {
    ghost: 'btn btn-ghost btn-sm ',
    square: 'btn btn-primary btn-square btn-sm ',
  },
}

export const MaxMinButton = ({ cantidad, setCantidad, button, className }: MaxMinButtonProps) => {
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
    <div className={className ? className : ''}>
      <button className={cn(style.button[button], 'sm:mr-1 ')} onClick={addAmount}>
        <FaPlus className='text-xs  sm:text-sm ' />
      </button>
      <input className='w-6  text-center' type='text' readOnly value={cantidad} />
      <button className={cn(style.button[button], 'sm:ml-1 ')} onClick={subtractAmount}>
        <FaMinus className='text-xs  sm:text-sm ' />
      </button>
    </div>
  )
}
