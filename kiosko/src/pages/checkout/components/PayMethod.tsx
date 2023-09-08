import { useState } from 'react'
import { PayCard } from './Paycard'
import { Button } from '../../../components-libs/Button'
import cn from '../../../util/cn'
import { SubmitHandler } from 'react-hook-form'

const paymethods = ['efectivo', 'transfermovil']

export type PayMethodStepForm = {
  paymethod: string
}

type PayMethodStepInfoProps = {
  defaultValues?: PayMethodStepForm
  onSubmit: SubmitHandler<PayMethodStepForm>
}

export const PayMethod = ({ defaultValues, onSubmit }: PayMethodStepInfoProps) => {
  const [selectedPayMethod, setSelectedPayMethod] = useState<string>(defaultValues?.paymethod ?? '')

  return (
    <div className='w-full my-8 lg:w-3/4 mx-auto'>
      <h1 className=' text-xl text-center md:text-left font-semibold my-8'>Método de pago</h1>

      <div
        className={cn(
          'w-full  grid  place-items-center gap-4 ',
          paymethods.length > 1 ? 'grid-cols-2 md:grid-cols-3' : '',
        )}
      >
        {paymethods.map((m, index) => (
          <PayCard
            key={index}
            paymethod={m}
            onSelect={setSelectedPayMethod}
            selectedPayMethod={selectedPayMethod}
          />
        ))}
      </div>
      <div className='w-full flex justify-end mt-8 '>
        <Button
          onClick={() => onSubmit({ paymethod: selectedPayMethod })}
          type='submit'
          className='btn-primary text-white'
        >
          Continuar
        </Button>
      </div>
    </div>
  )
}
