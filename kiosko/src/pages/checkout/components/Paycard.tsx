import { FaCheckCircle } from 'react-icons/fa'

type PayCardProps = {
  paymethod: string
  onSelect(paymethod: string): void
  selectedPayMethod: string
}
export const PayCard = ({ paymethod, onSelect, selectedPayMethod }: PayCardProps) => {
  return (
    <div
      onClick={() => onSelect(paymethod)}
      className='w-full h-40 border-2 border-primary  rounded-lg shadow-lg relative flex cursor-pointer  hover:bg-primary/5 items-center justify-center'
    >
      {paymethod === selectedPayMethod && (
        <span className='absolute top-1 right-1'>
          <FaCheckCircle className='text-primary' />
        </span>
      )}
      <h1 className='capitalize text-primary text-lg font-semibold italic '>{paymethod}</h1>
    </div>
  )
}
