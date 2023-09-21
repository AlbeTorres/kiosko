import { useParams } from 'react-router-dom'
import { ProductImg } from './components/ProductImg'
import { ProductDetails } from './components/ProductDetails'
import { useProduct } from '../../hooks/api'
import { BackButton } from '../../components-libs/Button/BackButton'

const Product = () => {
  const { id } = useParams()

  const { data: product, isSuccess } = useProduct(id ? { id } : { id: '' })

  return (
    <div className=' relative'>
      <BackButton route='/' />
      <div className='md:h-[30rem]'>
        {isSuccess ? (
          <div className='md:grid md:grid-cols-[50%_47%] gap-x-5 mb-5 h-full'>
            <ProductImg product={product} />
            <div className='w-full h-full '>
              <ProductDetails product={product} />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Product
