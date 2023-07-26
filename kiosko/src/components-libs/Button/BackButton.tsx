import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import cn from '../../util/cn'

type BackButtonProps = {
  route: string
  className?: string
}

export const BackButton = ({ route, className }: BackButtonProps) => {
  return (
    <Link to={route}>
      <div className={cn(className ? className : '', 'flex items-center mb-5 mt-2 md:text-lg')}>
        <FaArrowCircleLeft className='text-primary' />
        <p className='ml-1'>Atrás</p>
      </div>
    </Link>
  )
}
