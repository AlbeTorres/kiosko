import { useState } from 'react'
import { ContactStepForm, ContactStepInfo } from './ContactInfo'
import { DeliveryFormData, DeliveryMethod } from './DeliveryMethod'
import { PayMethod, PayMethodStepForm } from './PayMethod'

type CheckoutStepFormProps = {
  step: number
  setStep(current: number): void
  onSubmit: (data: CheckoutForm) => void
}

export type CheckoutForm = {
  contact: ContactStepForm
  delivery: DeliveryFormData
  paymethod: PayMethodStepForm
}

export const CheckoutStepsForm = ({ step, setStep, onSubmit }: CheckoutStepFormProps) => {
  const [checkoutData, setCheckoutData] = useState<CheckoutForm>({
    contact: { name: '', phone: '', carnet: 0 },
    delivery: { deliveryoption: 'envio', provincia: '', municipio: '', direccion: '', zipcode: 0 },
    paymethod: { paymethod: '' },
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
              onSubmit({ ...checkoutData, paymethod: data })
            }}
          />
        )
      )}
    </section>
  )
}
