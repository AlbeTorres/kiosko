import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { Select } from '../../../components-libs/Select'
import { TextField } from '../../../components-libs/TextField'
import { DeliveryFormData } from './DeliveryMethod'
type DeliveryFormProps = {
  errors: FieldErrors<DeliveryFormData>
  register: UseFormRegister<DeliveryFormData>
  handleSubmit: any
  costo: number
}

export const DeliveryForm = ({ register, errors, handleSubmit, costo }: DeliveryFormProps) => {
  return (
    <form onSubmit={handleSubmit} className=' md:grid md:grid-cols-2 md:gap-x-2 md:items-start '>
      <div className='w-full'>
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
      </div>
      <div>
        <TextField
          required
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

        <TextField
          disabled
          readOnly
          value={costo}
          error={errors.deliverycost?.message}
          placeholder='100'
          label='Costo de envío'
          {...register('deliverycost')}
        />
      </div>
    </form>
  )
}
