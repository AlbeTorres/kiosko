import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import PinField from 'react-pin-field'

import { toast } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { useChangePassword } from '../../hooks/api'
import { PasswordTextField } from '../../components-libs/TextField'
import { regexps } from '../../util/validations'
import { Dialog } from '../../components-libs/Dialog'
import Home from '../home/Home'

type RecoverPassForm = {
  code: string
  password: string
  passwordConfirmation: string
}

const RecoveryPass = () => {
  const changePassword = useChangePassword()

  const email = useParams()
  const navigate = useNavigate()

  console.log(email)
  const {
    getValues,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoverPassForm>()

  const handleChangePass: SubmitHandler<RecoverPassForm> = data =>
    changePassword.mutate(
      {
        data: {
          code: Number(data.code),
          password: data.password,
          email: email.email || '',
        },
      },
      {
        onSuccess: () => {
          toast.success('Contraseña cambiada con éxito')
          navigate('/login')
        },
      },
    )
  return (
    <>
      <Dialog open={true} onClose={() => () => navigate('/')}>
        <section className=' w-full py-2 h-fit'>
          <h1 className='font-semibold text-center '>Nueva contraseña</h1>
          <h3 className='text-sm text-center'>
            Hemos envíado a su correo un código, introduzcalo así como su nueva contraseña
          </h3>
          <form
            className='flex flex-col w-full mt-5 items-center gap-y-5'
            onSubmit={handleSubmit(handleChangePass)}
          >
            <div className='flex flex-row gap-x-2'>
              <Controller
                name='code'
                control={control}
                render={({ field: { onChange } }) => (
                  <PinField
                    autoComplete='new-number'
                    length={6}
                    validate={/^[0-9]$/}
                    className=' w-8 rounded-md border-2 border-gray-300  text-center text-lg outline-none focus:border-topaz'
                    onComplete={onChange}
                  />
                )}
              />
            </div>
            <div className='w-full'>
              <PasswordTextField
                autoComplete='new-password'
                className='w-full'
                label={'Nueva contraseña'}
                placeholder='Password'
                error={errors.password?.message}
                {...register('password', {
                  required: 'Contraseña requerida',
                  pattern: {
                    value: regexps.password,
                    message: 'Debe contener más de 8 caracteres',
                  },
                  setValueAs: (v: string) => v.trim(),
                })}
              />
              <PasswordTextField
                autoComplete='new-password'
                className='w-full'
                label={'Confirma la contraseña'}
                placeholder='Confirma la contraseña'
                error={errors.passwordConfirmation?.message}
                {...register('passwordConfirmation', {
                  required: 'Confirmación de la contraseña requerida',
                  setValueAs: (v: string) => v.trim(),
                  pattern: {
                    value: regexps.password,
                    message: 'Debe contener más de 8 caracteres',
                  },
                  validate: v => v === getValues('password') || 'Las contraseñas no coinciden',
                })}
              />
            </div>

            <div className='flex flex-col w-full gap-y-3'>
              <button type='submit' className='btn btn-primary w-full'>
                Confirmar
              </button>
              <button onClick={() => navigate('/')} className='btn w-full'>
                Cancelar
              </button>
            </div>
          </form>
        </section>
      </Dialog>
      <Home />
    </>
  )
}

export default RecoveryPass
