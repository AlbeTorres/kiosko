import Container from '../../../layouts/utils/Container'
import { Product } from '../../../lib/Models/Product.model'
import { CartItem } from './CartItem'

type CartProductListProps = {
  products: Product[]
}

export const CartProductList = ({ products }: CartProductListProps) => {
  return (
    <div className='flex flex-col w-2/3  mx-auto'>
      {products.map((p, index) => (
        <CartItem
          key={p._id}
          price={p.precio}
          _id={p._id}
          quantity={1}
          nombre={p.nombre}
          img={p.img}
          bg={index % 2 === 0 ? true : false}
        />
      ))}
    </div>
  )
}
