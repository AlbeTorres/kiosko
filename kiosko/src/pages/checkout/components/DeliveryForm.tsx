import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { Select } from '../../../components-libs/Select'
import { TextField } from '../../../components-libs/TextField'
import { DeliveryFormData } from './DeliveryMethod'
import { Button } from '../../../components-libs/Button'

type DeliveryFormProps = {
  errors: FieldErrors<DeliveryFormData>
  register: UseFormRegister<DeliveryFormData>
  handleSubmit: any
}

export const DeliveryForm = ({ register, errors, handleSubmit }: DeliveryFormProps) => {
  return (
    <form onSubmit={handleSubmit} className='md:w-80'>
      <Select
        error={errors.provincia?.message}
        items={['Artemisa']}
        placeholder='Provincia'
        label='Selecciona la provincia'
        register={register}
        name='provincia'
      />

      <Select
        error={errors.municipio?.message}
        items={['Artemisa']}
        placeholder='Municipio'
        label='Selecciona el municipio'
        register={register}
        name='municipio'
      />
      <TextField
        error={errors.direccion?.message}
        placeholder='Dirección de entrega'
        label='Dirección de entrega'
        {...register('direccion', {
          required: {
            value: true,
            message: 'La dirección es requerida',
          },
        })}
      />
    </form>
  )
}
