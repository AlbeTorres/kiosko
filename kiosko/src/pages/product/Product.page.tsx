import { useParams } from 'react-router-dom'
import { ProductImg } from './components/ProductImg'
import { ProductDetails } from './components/ProductDetails'

const Product = () => {
  const id = useParams()

  return (
    <div className='lg:grid lg:grid-cols-[55%_45%] '>
      <ProductImg />
      <div className='w-full h-full '>
        <ProductDetails _id={1} />
      </div>
    </div>
  )
}

export default Product
