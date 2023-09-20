import { useNavigate } from 'react-router-dom'
import { Button } from '../../../../components-libs/Button'
import { Pedido } from '../../../../lib/Models/Pedido.model'

type DeleveryItemProps = {
  deliveryopen: string
  id: string
  onOpen(id: string): void
  delivery: Pedido
}

export const DeliveryItem = ({ id, onOpen, deliveryopen, delivery }: DeleveryItemProps) => {
  const navigate = useNavigate()
  return (
    <div className='collapse collapse-arrow bg-base-200 my-5'>
      <input
        type='radio'
        name='my-accordion-2'
        onChange={e => {
          e.target.checked && onOpen(id)
        }}
        checked={deliveryopen === id}
      />
      <div className='collapse-title text-xl font-medium'>{delivery.fechaini.split('T')[0]}</div>
      <div className='collapse-content'>
        <p>{delivery.metodo_pago}</p>
        <p>{delivery.receptor}</p>
        <p>{delivery.valor_total}</p>
      </div>
      <Button onClick={() => navigate(`/account/deliverys/${id}`)}>ver mas</Button>
    </div>
  )
}
