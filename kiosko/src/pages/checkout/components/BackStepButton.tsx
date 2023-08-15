import React from 'react'
import cn from '../../../util/cn'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

type BackStepButtonProps = {
  step: number
  onChange(current: number): void
}

export const BackStepButton = ({ step, onChange }: BackStepButtonProps) => {
  const navigate = useNavigate()

  const handleBack = () => {
    onChange(step - 1)
  }

  return (
    <div
      onClick={step > 1 ? handleBack : () => navigate('/')}
      className='cursor-pointer w-fit absolute -left-16 xs:-left-24 top-16 lg:-left-36 md:left-0 md:top-20 lg:top-16'
    >
      <div className={'flex items-center mb-5 mt-2 md:text-lg w-fit'}>
        <FaArrowCircleLeft className='text-primary' />
        <p className='ml-1'>Atrás</p>
      </div>
    </div>
  )
}
