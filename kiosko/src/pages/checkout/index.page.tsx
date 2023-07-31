import React, { useState } from 'react'
import { CheckoutSteps } from './components/CheckoutSteps'

const Checkout = () => {
  const [step, setStep] = useState<number>(1)

  const handleStep = (current: number) => {
    setStep(current)
  }

  return (
    <div>
      <div className='w-full flex justify-center h-[500px]'>
        <CheckoutSteps onChange={handleStep} step={step} />
      </div>
    </div>
  )
}

export default Checkout
