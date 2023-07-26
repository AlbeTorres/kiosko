import React, { useContext } from 'react'
import { useAllCartProduct } from '../../hooks/api/shopcart.hook'
import cartContext from '../../context/productoContext/cartContext'
import { Spinner } from '../../components-libs/Spinner'
import { CartProductList } from './components/CartProductList'
import { Product } from '../../lib/Models/Product.model'

export const ShopCart = () => {
  return (
    <section className='w-full'>
      <div className='flex flex-col w-fit items-center  mx-auto '>
        <h1 className='text-4xl font-semibold my-2 '>Carro de compras</h1>
        <div className='h-2 w-32 bg-primary rounded-lg border-none' />
      </div>
      <section className='mt-10 h-[500px]'>
        <CartProductList />
      </section>
    </section>
  )
}
