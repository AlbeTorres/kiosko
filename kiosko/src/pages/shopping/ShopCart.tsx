import React, { useContext } from 'react'
import { useAllCartProduct } from '../../hooks/api/shopcart.hook'
import cartContext from '../../context/productoContext/cartContext'
import { Spinner } from '../../components-libs/Spinner'
import { CartProductList } from './components/CartProductList'

export const ShopCart = () => {
  const context = useContext(cartContext)

  const { data: productcart, isSuccess } = useAllCartProduct({
    options: { cartproducts: JSON.stringify(context?.cart) },
  })

  return (
    <section className='w-full'>
      <div className='flex flex-col w-fit items-center  mx-auto '>
        <h1 className='text-4xl font-semibold my-2 '>Carro de compras</h1>
        <div className='h-2 w-32 bg-primary rounded-lg border-none' />
      </div>
      <section className='mt-10'>
        {isSuccess ? (
          <>{productcart.length > 0 ? <CartProductList products={productcart} /> : <div></div>}</>
        ) : (
          <div className=''>
            <Spinner className='w-10 h-10 mx-auto my-20' />
          </div>
        )}
      </section>
    </section>
  )
}
