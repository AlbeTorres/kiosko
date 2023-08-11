import { useState } from 'react'
import { ContactStepForm, ContactStepInfo } from './ContactInfo'
import { DeliveryFormData, DeliveryMethod } from './DeliveryMethod'
import { PayMethod, PayMethodStepForm } from './PayMethod'

type CheckoutStepFormProps = {
  step: number
  setStep(current: number): void
}

export type CheckoutForm = {
  contact: ContactStepForm | undefined
  delivery: DeliveryFormData | undefined
  paymethod: PayMethodStepForm | undefined
}

export const CheckoutStepsForm = ({ step, setStep }: CheckoutStepFormProps) => {
  const [checkoutData, setCheckoutData] = useState<CheckoutForm>({
    contact: undefined,
    delivery: undefined,
    paymethod: undefined,
  })

  return (
    <section>
      {step === 1 ? (
        <ContactStepInfo
          defaultValues={checkoutData.contact}
          onSubmit={data => {
            setCheckoutData({ ...checkoutData, contact: data })
            setStep(2)
          }}
        />
      ) : step === 2 ? (
        <DeliveryMethod
          defaultValues={checkoutData.delivery}
          onSubmit={data => {
            setCheckoutData({ ...checkoutData, delivery: data })
            setStep(3)
          }}
        />
      ) : (
        step === 3 && (
          <PayMethod
            defaultValues={checkoutData.paymethod}
            onSubmit={data => {
              setCheckoutData({ ...checkoutData, paymethod: data })
            }}
          />
        )
      )}
    </section>
  )
}
