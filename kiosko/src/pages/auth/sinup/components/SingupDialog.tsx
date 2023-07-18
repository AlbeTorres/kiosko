import { useForm } from 'react-hook-form'
import { Dialog, DialogProps } from '../../../../components-libs/Dialog/Dialog'
import { SingupOutput } from '../../../../lib/requests/auth.type'
import { useSingup } from '../../../../hooks/api'
import toast from 'react-hot-toast'
import { AxiosError } from 'axios'
import TextField from '../../../../components-libs/TextField/TextField'
import { FaEnvelope, FaUser } from 'react-icons/fa'
import { regexps } from '../../../../util/validations'
import PasswordTextField from '../../../../components-libs/TextField/PasswordTextField'
import { Link } from 'react-router-dom'
import { Button } from '../../../../components-libs/Button'

type SingupFrom = {
  nombre: string
  email: string
  password: string
  passwordConfirmation: string
  isAdmin: boolean
  advertencia: number
  kycimg: string
  kyc: boolean
  carnet: string
}

type AxiosErrorResponse = {
  msg: string
}

type SingupDialogProps = DialogProps & {
  onSingup(data: SingupOutput): void
}

const SingupDialog = ({ onSingup, ...props }: SingupDialogProps) => {
  const singup = useSingup()

  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SingupFrom>()

  const handleSingup = (data: SingupFrom) =>
    singup.mutate(
      {
        nombre: data.nombre,
        email: data.email,
        password: data.password,
        isAdmin: data.email === 'albertocorreoficial@gmail.com',
        advertencia: 1,
        kycimg: '',
        kyc: false,
        carnet: '',
      },
      {
        onSuccess: onSingup,

        onError: async (e: AxiosError<AxiosErrorResponse, any>) => {
          toast.error(e.response.data.msg)
        },
      },
    )

  return (
    <Dialog {...props}>
      <section className='w-full py-2 h-fit '>
        <h1 className=' text-center text-xl font-bold'>Registrase</h1>
        <form
          onSubmit={handleSubmit(handleSingup)}
          className='xs:w-72 w-60  md:w-80 h-full  flex flex-col gap-y-7    m-auto'
        >
          <div>
            <TextField
              className='w-full'
              type='text'
              placeholder='Nombre'
              icon={FaUser}
              error={errors.nombre?.message}
              {...register('nombre', {
                required: {
                  value: true,
                  message: 'Nombre requerido',
                },
                pattern: {
                  value: regexps.name,
                  message: 'Nombre inválido',
                },
              })}
            />
            <TextField
              className='w-full'
              type='text'
              placeholder='Email'
              icon={FaEnvelope}
              error={errors.email?.message}
              {...register('email', {
                required: {
                  value: true,
                  message: 'Correo requerido',
                },
                pattern: {
                  value: regexps.email,
                  message: 'correo inválido',
                },
              })}
            />

            <PasswordTextField
              className='w-full'
              placeholder='Contraseña'
              error={errors.password?.message}
              {...register('password', {
                required: 'Contraseña requerida',
                setValueAs: (v: string) => v.trim(),
                pattern: {
                  value: regexps.password,
                  message: 'Debe contener más de 8 caracteres',
                },
              })}
            />

            <div>
              <PasswordTextField
                autoComplete='new-password'
                className='w-full'
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

              <Link to={'/login'}>
                <p className='text-sm hover:text-primary mt-2'>Ya tengo una cuenta</p>
              </Link>
            </div>
          </div>
          <Button
            type='submit'
            className='btn-primary w-full'
            loading={singup.isLoading}
            disabled={singup.isLoading}
          >
            Confirmar
          </Button>
        </form>
      </section>
    </Dialog>
  )
}

export default SingupDialog
