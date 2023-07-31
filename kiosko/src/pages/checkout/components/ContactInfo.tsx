import { Button } from '../../../components-libs/Button'
import { PhoneTextField } from '../../../components-libs/TextField'

import TextField from '../../../components-libs/TextField/TextField'
import { Controller, useForm } from 'react-hook-form'

export const ContactInfo = () => {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Record<string, any>>()

  return (
    <div>
      <h1 className='text-center text-xl font-semibold mt-16'>Información de contácto</h1>
      <form className='w-80 mx-auto space-y-5 mt-5 mb-10'>
        <TextField label='Nombre del destinatario' />

        <Controller
          name='phone'
          control={control}
          render={({ field: { onChange, value } }) => (
            <PhoneTextField value={value} onChange={onChange} />
          )}
        />

        {/* <TextField label='Teléfono de contácto' /> */}
        <TextField label='Carnet del destinatario' />
        <div className='w-full flex justify-end '>
          <Button className='btn-primary '>Continuar</Button>
        </div>
      </form>
    </div>
  )
}
