import { Pedido } from '../../../../lib/Models/Pedido.model'

type DeleveryItemProps = {
  deliveryopen: string
  id: string
  onOpen(id: string): void
  delivery: Pedido
}

export const DeliveryItem = ({ id, onOpen, deliveryopen, delivery }: DeleveryItemProps) => {
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
      <div className='collapse-title text-xl font-medium'>{delivery.fechaini}</div>
      <div className='collapse-content'>
        <h1>{delivery.estado}</h1>
      </div>
    </div>
  )
}
