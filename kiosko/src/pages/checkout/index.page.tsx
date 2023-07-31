import React, { useState } from 'react'
import { CheckoutSteps } from './components/CheckoutSteps'
import { ContactInfo } from './components/ContactInfo'

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
      <section>{step === 1 ? <ContactInfo /> : step === 2 ? <></> : step === 3 && <></>}</section>
    </div>
  )
}

export default Checkout
