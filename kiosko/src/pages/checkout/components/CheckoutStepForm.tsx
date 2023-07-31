import { useState } from 'react'
import { ContactStepForm, ContactStepInfo } from './ContactInfo'

type CheckoutStepFormProps = {
  step: number
  setStep(current: number): void
}

export type CheckoutForm = {
  contact: ContactStepForm | undefined
}

export const CheckoutStepsForm = ({ step, setStep }: CheckoutStepFormProps) => {
  const [checkoutData, setCheckoutData] = useState<CheckoutForm>({
    contact: undefined,
  })

  return (
    <section>
      {step === 1 ? (
        <ContactStepInfo defaultValues={checkoutData.contact} onSubmit={() => {}} />
      ) : step === 2 ? (
        <></>
      ) : (
        step === 3 && <></>
      )}
    </section>
  )
}
