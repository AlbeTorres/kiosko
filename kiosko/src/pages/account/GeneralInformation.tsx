import AccountLayout from './components/AccountLayout'
import { PhoneTextField, TextField } from '../../components-libs/TextField'
import { Button } from '../../components-libs/Button'
import { Controller, useForm } from 'react-hook-form'
import { useProfile, useUpdateUser } from '../../hooks/api'
import { regexps } from '../../util/validations'
import { isValidPhoneNumber } from 'react-phone-number-input'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import { Spinner } from '../../components-libs/Spinner'

type ProfileEditForm = {
  firstName: string
  lastName: string
  phone: string
  carnet: string
  address: string
}

const GeneralInformation = () => {
  const { data: profile, isSuccess } = useProfile()
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<ProfileEditForm>()

  const editProfile = useUpdateUser()

  useEffect(() => {
    if (profile) {
      reset({
        firstName: profile.nombre,
        lastName: profile.apellido,
        phone: profile.movil?.toString(),
        carnet: profile.carnet?.toString(),
        address: profile.address,
      })
    }
  }, [profile])

  const onSubmit = (data: ProfileEditForm) =>
    editProfile.mutate(
      {
        id: profile!._id,
        datos: {
          nombre: data.firstName,
          apellido: data.lastName,
          movil: data.phone,
          carnet: data.carnet,
          address: data.address,
        },
      },
      {
        onSuccess: async () => {
          toast.success('Perfil actualizado')
        },
      },
    )

  return (
    <AccountLayout title={'Información general'} current='general'>
      {isSuccess ? (
        <form onSubmit={handleSubmit(onSubmit)} className='md:w-3/5 flex flex-col gap-y-2 '>
          <div>
            <TextField
              label='Nombre'
              required
              placeholder='John'
              error={errors.firstName?.message}
              {...register('firstName', {
                required: {
                  value: true,
                  message: 'Nombre requerido',
                },
                pattern: {
                  value: regexps.name,
                  message: 'Debe introducir un nombre válido',
                },
              })}
            />
            <TextField
              label='Apellido'
              required
              placeholder='Doe'
              error={errors.lastName?.message}
              {...register('lastName', {
                required: {
                  value: true,
                  message: 'Apellido requerido',
                },
                pattern: {
                  value: regexps.name,
                  message: 'Debe introducir un apellido válido',
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
                <PhoneTextField
                  placeholder='55668899'
                  required
                  label='Teléfono'
                  value={value}
                  onChange={onChange}
                  errors={errors.phone?.message}
                />
              )}
            />
            <TextField
              required
              label='Carnet de identidad'
              placeholder='95052730975'
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
            <TextField
              required
              label='Dirección'
              error={errors.address?.message}
              placeholder='calle 50 entre 20 y 33 #2022'
              {...register('address', {
                required: {
                  value: true,
                  message: 'La dirección es requerida',
                },
              })}
            />
          </div>
          <div className='w-full flex justify-end gap-2'>
            <Button
              type='submit'
              className='btn-primary'
              loading={editProfile.isLoading}
              disabled={!isDirty || editProfile.isLoading}
            >
              Aceptar
            </Button>
          </div>
        </form>
      ) : (
        <Spinner className='h-10 w-10 mx-auto' />
      )}
    </AccountLayout>
  )
}

export default GeneralInformation
