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
      className='cursor-pointer w-fit absolute top-5 -left-20 -bottom-10 xs:-left-28  lg:-left-40 md:-left-10 md:top-14 lg:top-16'
    >
      <div className={'flex items-center mb-5 mt-2 md:text-lg w-fit'}>
        <FaArrowCircleLeft className='text-primary' />
        <p className='ml-1'>Atrás</p>
      </div>
    </div>
  )
}
