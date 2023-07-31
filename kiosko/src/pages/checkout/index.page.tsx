import React, { useState } from 'react'
import { CheckoutSteps } from './components/CheckoutSteps'
import { CheckoutStepsForm } from './components/CheckoutStepForm'

const Checkout = () => {
  const [step, setStep] = useState<number>(1)

  const handleStep = (current: number) => {
    setStep(current)
  }

  return (
    <div>
      <div className='w-full flex justify-center'>
        <CheckoutSteps onChange={handleStep} step={step} />
      </div>
      <CheckoutStepsForm step={step} setStep={handleStep} />
    </div>
  )
}

export default Checkout
