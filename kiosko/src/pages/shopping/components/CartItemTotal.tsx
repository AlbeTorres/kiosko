import { ItemCart } from './ItemCart.layout'

type CartItemTotalProps = {
  cantidad: number
  total: number
}

export const CartItemTotal = ({ cantidad, total }: CartItemTotalProps) => {
  return (
    <div className=' md:mt-5'>
      <ItemCart bg={false}>
        <p className='font-bold '>Orden total:</p>
        <div className='font-bold flex md:flex-col md:items-center '>
          <p className='mr-1'>Costo envío:</p>
          <p>
            {cantidad}
            <span className='mr-1'>Cup</span>
          </p>
        </div>

        <p className='font-bold '>
          <span className='md:hidden mr-1'>Cantidad:</span>
          {cantidad}
        </p>
        <p className='font-bold '>
          <span className='md:hidden mr-1'>Total:</span>
          {total}
          <span className='ml-1'>cup</span>
        </p>
        <div></div>
      </ItemCart>
    </div>
  )
}
