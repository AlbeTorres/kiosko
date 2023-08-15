import { useContext, useState } from 'react'
import { CheckoutSteps } from './components/CheckoutSteps'
import { CheckoutForm, CheckoutStepsForm } from './components/CheckoutStepForm'
import { useAddPedido, useProfile } from '../../hooks/api'
import cartContext from '../../context/productoContext/cartContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const navigate = useNavigate()
  const context = useContext(cartContext)
  const profile = useProfile()

  const [step, setStep] = useState<number>(1)

  const handleStep = (current: number) => {
    setStep(current)
  }

  const createPedido = useAddPedido()

  const onSubmit = (data: CheckoutForm) =>
    createPedido.mutate(
      {
        productos: JSON.stringify(context?.cart),
        direccion: data.delivery.direccion,
        zipcode: data.delivery.zipcode,
        provincia: data.delivery.provincia,
        municipio: data.delivery.municipio,
        receptor: data.contact.name,
        movil: data.contact.phone,
        metodo_pago: data.paymethod.paymethod,
        valor_descuentos: 0,
        valor_envio: 0,
        valor_total: 0,
        valor_subtotal: 0,
        carnet: data.contact.carnet,
        usuario: profile.data?._id,
        estado: 'verificar',
      },
      {
        onSuccess: async () => {
          context?.deleteCartALL()
          toast.success('Pedido creado')
          navigate('/')
        },
      },
    )

  return (
    <div>
      <div className='w-full flex justify-center'>
        <CheckoutSteps step={step} />
      </div>
      <CheckoutStepsForm step={step} setStep={handleStep} onSubmit={onSubmit} />
    </div>
  )
}

export default Checkout
