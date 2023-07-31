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
    <div>
      <h1 className='text-center text-xl font-semibold mt-16'>Información de contácto</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='w-80 mx-auto space-y-5 mt-5 mb-10'>
        <TextField
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
        <div className='w-full flex justify-end '>
          <Button className='btn-primary '>Continuar</Button>
        </div>
      </form>
    </div>
  )
}
