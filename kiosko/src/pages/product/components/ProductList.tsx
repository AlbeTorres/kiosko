import { useContext } from 'react'
import { Spinner } from '../../../components-libs/Spinner'
import { useAllProducts } from '../../../hooks/api'
import { ProductCard } from './ProductCard'
import searchContext from '../../../context/searchContext/searchContext'
import { Product } from '../../../lib/Models/Product.model'

export const ProductList = () => {
  const context = useContext(searchContext)
  const { data: products, isSuccess } = useAllProducts()
  let productList: Product[] = []

  if (isSuccess) {
    if (context?.search) {
      const search = context?.search

      productList = products?.filter(producto => {
        return Object.values(producto)
          .join(' ')
          .toLowerCase()
          .includes(search?.toLowerCase())
      })
    } else {
      productList = products
    }
  }

  return (
    <div className='mb-10 w-full mt-16 md:mt-0  '>
      <div className='w-full'>
        <h2 className='text-2xl py-4 '>Productos</h2>

        {isSuccess ? (
          <div className='grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 '>
            {productList.map(producto => (
              <ProductCard key={producto._id} {...producto} />
            ))}
          </div>
        ) : (
          <div className='m-auto w-20 h-20'>
            <Spinner />
          </div>
        )}
      </div>
    </div>
  )
}
