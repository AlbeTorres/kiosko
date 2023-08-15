import { CartProductList } from './components/CartProductList'
import { BackButton } from '../../components-libs/Button/BackButton'

export const ShopCart = () => {
  return (
    <section className='w-full'>
      <div className='flex flex-col w-fit items-center mt-5  mx-auto '>
        <h1 className='text-4xl font-semibold '>Carro de compras</h1>
        <div className='h-2 w-32 bg-primary my-5 rounded-md border-none' />
      </div>

      <BackButton route='/' />

      <section className='mt-10 h-[500px]'>
        <CartProductList />
      </section>
    </section>
  )
}
