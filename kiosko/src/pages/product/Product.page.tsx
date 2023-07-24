import { useParams } from 'react-router-dom'
import { ProductImg } from './components/ProductImg'
import { ProductDetails } from './components/ProductDetails'
import { useProduct } from '../../hooks/api'

const Product = () => {
  const { id } = useParams()

  const { data: product, isSuccess } = useProduct({ id })

  console.log(product)

  return (
    <>
      {isSuccess ? (
        <div className='lg:grid lg:grid-cols-[55%_45%] gap-x-5 mb-5'>
          <ProductImg product={product} />
          <div className='w-full h-full '>
            <ProductDetails product={product} />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Product
