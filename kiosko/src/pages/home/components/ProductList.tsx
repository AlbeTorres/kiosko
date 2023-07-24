import { Spinner } from '../../../components-libs/Spinner'
import { useAllProducts } from '../../../hooks/api'
import { ProductCard } from './ProductCard'

export const ProductList = () => {
  const { data: products, isSuccess } = useAllProducts()

  return (
    <div className='mb-10 w-full  '>
      <div className='w-full'>
        <h2 className='text-2xl py-4 '>Productos</h2>

        {isSuccess ? (
          <div className='grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 '>
            {products.map(producto => (
              <ProductCard key={producto._id} {...producto} />
            ))}
          </div>
        ) : (
          <div>
            <Spinner />
          </div>
        )}
      </div>
    </div>
  )
}
