import { useState } from 'react'
import { DeliveryForm } from './DeliveryForm'
import { Button } from '../../../components-libs/Button'
import { SubmitHandler, useForm } from 'react-hook-form'

type DeliveryMethodProps = {
  defaultValues: DeliveryFormData | undefined
  onSubmit: SubmitHandler<DeliveryFormData>
}

export type DeliveryFormData = {
  deliveryoption?: 'envio' | 'Recoger en tienda'
  provincia: string
  municipio: string
  direccion: string
  zipcode: number
}

export const DeliveryMethod = ({ defaultValues, onSubmit }: DeliveryMethodProps) => {
  const [deliveryoption, setDeliveryOption] = useState<'envio' | 'Recoger en tienda'>('envio')

  const {
    formState: { errors },
    register,
    handleSubmit,
    setValue,
  } = useForm<DeliveryFormData>({ defaultValues })

  const onSubmitDelivery = (data: DeliveryFormData) => {
    console.log(data)
    onSubmit({ ...data, deliveryoption: deliveryoption })
  }

  return (
    <div className='min-h-[500px] md:w-3/4 mx-auto  rounded-md'>
      <div className='collapse collapse-arrow bg-base-200 my-5'>
        <input
          type='radio'
          name='my-accordion-2'
          onChange={e => {
            e.target.checked && setDeliveryOption('envio')
          }}
          checked={deliveryoption === 'envio'}
        />
        <div className='collapse-title text-xl font-medium'>Envío</div>
        <div className='collapse-content'>
          <DeliveryForm errors={errors} register={register} handleSubmit={handleSubmit} />
        </div>
      </div>

      <div className='collapse collapse-arrow bg-base-200'>
        <input
          type='radio'
          name='my-accordion-2'
          checked={deliveryoption === 'Recoger en tienda'}
          onChange={e => {
            e.target.checked && setDeliveryOption('Recoger en tienda')
          }}
        />
        <div className='collapse-title text-xl font-medium'>Recoger en tienda</div>
        <div className='collapse-content'>
          Esta opción no se encuentra disponible por el momento
        </div>
      </div>
      <div className='w-full flex justify-end mt-5 '>
        <Button
          type='submit'
          onClick={handleSubmit(onSubmitDelivery)}
          className='btn-primary text-white '
        >
          Continuar
        </Button>
      </div>
    </div>
  )
}
