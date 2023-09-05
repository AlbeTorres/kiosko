import { Button } from '../../../components-libs/Button'
import { PhoneTextField } from '../../../components-libs/TextField'

import TextField from '../../../components-libs/TextField/TextField'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { regexps } from '../../../util/validations'
import { isValidPhoneNumber } from 'react-phone-number-input'

export type ContactStepForm = {
  name: string
  phone: string
  carnet: number
}

type ContactStepInfoProps = {
  defaultValues?: ContactStepForm
  onSubmit: SubmitHandler<ContactStepForm>
}

export const ContactStepInfo = ({ defaultValues, onSubmit }: ContactStepInfoProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactStepForm>({
    defaultValues,
  })

  return (
    <div className='lg:w-3/4 mx-auto '>
      <h1 className=' text-xl text-center md:text-left font-semibold mt-8'>
        Información de contácto
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-5 mb-10 space-y-5'>
        <div className='md:w-80 space-y-5'>
          <TextField
            placeholder='Nombre del destinatario'
            label='Nombre del destinatario'
            error={errors.name?.message}
            {...register('name', {
              required: {
                value: true,
                message: 'Nombre requerido',
              },
              pattern: {
                value: regexps.name,
                message: 'Debe introducir un nombre real',
              },
            })}
          />

          <Controller
            name='phone'
            rules={{
              required: 'Debe introducir un número de teléfono',
              validate: v => isValidPhoneNumber(v) || 'Número de teléfono incorrecto',
            }}
            control={control}
            render={({ field: { onChange, value } }) => (
              <PhoneTextField value={value} onChange={onChange} errors={errors.phone?.message} />
            )}
          />

          <TextField
            label='Carnet del destinatario'
            placeholder='Carnet del destinatario'
            error={errors.carnet?.message}
            {...register('carnet', {
              required: {
                value: true,
                message: 'El número de carnet requerido',
              },
              pattern: {
                value: regexps.cantidad,
                message: 'Debe introducir un número de carnet real',
              },
            })}
          />
        </div>
        <div className='w-full flex justify-end '>
          <Button type='submit' className='btn-primary text-white'>
            Continuar
          </Button>
        </div>
      </form>
    </div>
  )
}
