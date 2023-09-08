import { useContext, useState } from 'react'
import { CheckoutSteps } from './components/CheckoutSteps'
import { CheckoutForm, CheckoutStepsForm } from './components/CheckoutStepForm'
import { useAddPedido, useProfile } from '../../hooks/api'
import cartContext from '../../context/productoContext/cartContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import useNavLock from '../../hooks/utils/useNavigationLock'
import { useAllCartProductPrice } from '../../hooks/api/shopcart.hook'

const Checkout = () => {
  const navigate = useNavigate()
  const context = useContext(cartContext)
  const profile = useProfile()
  const { data: monto } = useAllCartProductPrice({
    options: { cartproducts: JSON.stringify(context?.cart) },
  })

  const [isNavigationLocked, setIsNavigationLocked] = useState(true)
  const [step, setStep] = useState<number>(1)

  const handleStep = (current: number) => {
    setStep(current)
  }

  useNavLock(isNavigationLocked, 'Aún no has completado el pedido. ¿Deseas salir de todas formas?')
  const createPedido = useAddPedido()

  const onSubmit = (data: CheckoutForm) =>
    createPedido.mutate(
      {
        productos: JSON.stringify(context?.cart),
        direccion: data.delivery.direccion,
        zipcode: data.delivery.zipcode,
        provincia: data.delivery.provincia,
        municipio: data.delivery.municipio,
        valor_envio: data.delivery.deliverycost,
        receptor: data.contact.name,
        movil: data.contact.phone,
        metodo_pago: data.paymethod.paymethod,
        valor_descuentos: 0,
        valor_total: monto!.totalCartPrice + data.delivery.deliverycost,
        valor_subtotal: monto?.totalCartPrice || 0,
        carnet: data.contact.carnet,
        usuario: profile.data?._id,
        estado: 'pending',
      },
      {
        onSuccess: async () => {
          context?.deleteCartALL()
          setIsNavigationLocked(false)
          toast.success('Pedido creado')
          navigate('/')
        },
      },
    )

  return (
    <div>
      <div className='w-full flex justify-center'>
        <CheckoutSteps step={step} onChange={setStep} />
      </div>
      <CheckoutStepsForm step={step} setStep={handleStep} onSubmit={onSubmit} />
    </div>
  )
}

export default Checkout
