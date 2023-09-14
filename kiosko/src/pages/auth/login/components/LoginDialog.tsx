import { useForm } from 'react-hook-form'
import TextField from '../../../../components-libs/TextField/TextField'
import { Dialog } from '../../../../components-libs/Dialog'
import { FaEnvelope } from 'react-icons/fa'
import { regexps } from '../../../../util/validations'
import PasswordTextField from '../../../../components-libs/TextField/PasswordTextField'
import { Button } from '../../../../components-libs/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useLogin } from '../../../../hooks/api/profile.hook'
import toast from 'react-hot-toast'
import { AxiosError } from 'axios'
import { DialogProps } from '../../../../components-libs/Dialog/Dialog'
import { LoginAuthOutput } from '../../../../lib/requests/auth.type'

type LoginFrom = {
  email: string
  password: string
}

type LoginDialogProps = DialogProps & {
  onLogin(data: LoginAuthOutput): void
}

const LoginDialog = ({ onLogin, ...props }: LoginDialogProps) => {
  const login = useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFrom>()

  const handleLogin = (data: LoginFrom) =>
    login.mutate(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: onLogin,

        onError: async (e: unknown) => {
          if (e instanceof AxiosError) {
            // error is AxiosError here
            toast.error(e.response && e.response.data.msg)
          }
        },
      },
    )

  return (
    <Dialog {...props}>
      <section className='w-full py-2 h-fit '>
        <h1 className=' text-center text-xl font-bold'>Acceder</h1>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className='xs:w-72 w-60  md:w-80 h-full  flex flex-col gap-y-5    m-auto'
        >
          <div>
            <TextField
              className='w-full'
              placeholder='Email'
              type='text'
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

            <div>
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

              <Link to={'/recoverypassemail'}>
                <p className='text-sm hover:text-primary mt-2'>Olvidé mi contraseña</p>
              </Link>
            </div>
          </div>
          <Button
            type='submit'
            className='btn-primary w-full'
            loading={login.isLoading}
            disabled={login.isLoading}
          >
            Confirmar
          </Button>
        </form>
      </section>
    </Dialog>
  )
}

export default LoginDialog
