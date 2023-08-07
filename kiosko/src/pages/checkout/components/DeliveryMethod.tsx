import { useState } from 'react'
import { DeliveryForm } from './DeliveryForm'
import { Button } from '../../../components-libs/Button'

export const DeliveryMethod = () => {
  const [deliveryoption, setDeliveryOption] = useState('envio')

  return (
    <div className='min-h-[500px] md:w-3/4 mx-auto  rounded-md'>
      <div className='collapse collapse-arrow bg-base-200 my-5'>
        <input
          type='radio'
          name='my-accordion-2'
          onChange={e => {
            e.target.checked ? setDeliveryOption('envio') : setDeliveryOption('')
          }}
          checked={deliveryoption === 'envio'}
        />
        <div className='collapse-title text-xl font-medium'>Envío</div>
        <div className='collapse-content'>
          <DeliveryForm />
        </div>
      </div>

      <div className='collapse collapse-arrow bg-base-200'>
        <input
          type='radio'
          name='my-accordion-2'
          checked={deliveryoption === 'Recoger en tienda'}
          onChange={e => {
            e.target.checked ? setDeliveryOption('Recoger en tienda') : setDeliveryOption('')
          }}
        />
        <div className='collapse-title text-xl font-medium'>Recoger en tienda</div>
        <div className='collapse-content'>
          Esta opción no se encuentra disponible por el momento
        </div>
      </div>
      <div className='w-full flex justify-end mt-5 '>
        <Button type='submit' className='btn-primary text-white '>
          Continuar
        </Button>
      </div>
    </div>
  )
}
