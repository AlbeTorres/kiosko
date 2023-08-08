import { useState } from 'react'
import { ContactStepForm, ContactStepInfo } from './ContactInfo'
import { DeliveryFormData, DeliveryMethod } from './DeliveryMethod'

type CheckoutStepFormProps = {
  step: number
  setStep(current: number): void
}

export type CheckoutForm = {
  contact: ContactStepForm | undefined
  delivery: DeliveryFormData | undefined
}

export const CheckoutStepsForm = ({ step, setStep }: CheckoutStepFormProps) => {
  const [checkoutData, setCheckoutData] = useState<CheckoutForm>({
    contact: undefined,
    delivery: undefined,
  })

  return (
    <section>
      {step === 1 ? (
        <ContactStepInfo
          defaultValues={checkoutData.contact}
          onSubmit={data => {
            console.log(data)
            setStep(2)
          }}
        />
      ) : step === 2 ? (
        <DeliveryMethod
          defaultValues={checkoutData.delivery}
          onSubmit={data => {
            console.log(data)
            setStep(3)
          }}
        />
      ) : (
        step === 3 && <></>
      )}
    </section>
  )
}
