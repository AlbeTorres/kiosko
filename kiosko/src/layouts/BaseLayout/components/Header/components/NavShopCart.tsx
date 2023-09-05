import cartContext from '../../../../../context/productoContext/cartContext'
import { useContext } from 'react'
import { useAllCartProductPrice } from '../../../../../hooks/api/shopcart.hook'
import { Link } from 'react-router-dom'

export const NavShopCart = () => {
  const context = useContext(cartContext)
  let cantidad = context?.cart.reduce((cantidad: number, p) => cantidad + p.cantidad, 0)

  const { data: monto } = useAllCartProductPrice({
    options: { cartproducts: JSON.stringify(context?.cart) },
  })

  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={1} className='btn btn-ghost btn-circle'>
        <div className='indicator'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
          {cantidad !== 0 && (
            <span className='badge badge-primary badge-sm text-white indicator-item'>
              {cantidad}
            </span>
          )}
        </div>
      </label>
      <div tabIndex={1} className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'>
        <div className='card-body'>
          <span className='font-bold text-lg'>
            {cantidad} {cantidad && cantidad > 1 ? 'productos' : 'producto'}{' '}
          </span>
          <span className='text-info'>Subtotal: ${monto?.totalCartPrice} </span>
          <div className='card-actions'>
            <Link to={'/shopcart'} className='w-full'>
              <div className='btn btn-sm !h-10 btn-primary !text-xs text-white btn-block'>
                Ver carro
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
