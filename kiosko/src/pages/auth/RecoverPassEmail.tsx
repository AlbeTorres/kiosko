import { useForm, SubmitHandler } from 'react-hook-form'
import { regexps } from '../../util/validations'

import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useSendPasswordRecovery } from '../../hooks/api/profile.hook'
import TextField from '../../components-libs/TextField/TextField'
import { Dialog } from '../../components-libs/Dialog'
import Home from '../home/Home'

type RecoverPassEmailForm = {
  email: string
}

const RecoverPassEmail = () => {
  const navigate = useNavigate()
  const sendRecoveryPassCode = useSendPasswordRecovery()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoverPassEmailForm>()

  const handleSendRecoveryEmail: SubmitHandler<RecoverPassEmailForm> = data => {
    sendRecoveryPassCode.mutate(
      { data },
      {
        onSuccess: () => {
          toast.success('Se le ha enviado un código de verificación a su correo')

          navigate(`/recoverypass/${data.email}`)
        },
        onError: () => {
          toast.error('Algo salío mal')
        },
      },
    )
  }

  return (
    <>
      <Dialog open={true} onClose={() => {}}>
        <section className=' w-full py-2 h-fit'>
          <h1 className='font-semibold text-center '>Introduzca su correo</h1>
          <form
            className='flex flex-col w-full items-center gap-y-5'
            onSubmit={handleSubmit(handleSendRecoveryEmail)}
          >
            <TextField
              className='w-full'
              type='text'
              label={'Email'}
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
            <div className='flex flex-col w-full gap-y-3'>
              <button type='submit' className='btn btn-primary w-full'>
                Recuperar contraseña
              </button>
              <label htmlFor='my-modal-6' className='btn w-full'>
                Cancelar
              </label>
            </div>
          </form>
        </section>
      </Dialog>
      <Home />
    </>
  )
}

export default RecoverPassEmail
