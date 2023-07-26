import { useContext } from 'react'
import { Product } from '../../../lib/Models/Product.model'
import { CartItem } from './CartItem'
import cartContext from '../../../context/productoContext/cartContext'
import { useAllCartProduct } from '../../../hooks/api/shopcart.hook'
import { Spinner } from '../../../components-libs/Spinner'

export type ProductCart = Product & {
  cantidad: number | undefined
}

export const CartProductList = () => {
  const context = useContext(cartContext)

  const {
    data: productcart,
    refetch,
    isLoading,
  } = useAllCartProduct({
    options: { cartproducts: JSON.stringify(context?.cart) },
  })

  const handleCantidad = (id: string, cantidad: number) => {
    context?.updateProductCart(id, cantidad)

    console.log(cantidad)
  }

  const handleDelete = (_id: string) => {
    context?.deleteCartProduct(_id)
    refetch()
  }

  let products: ProductCart[] = []

  productcart?.map(p => {
    let aux = context?.cart.find(c => (c._id = p._id))

    products.push({ ...p, cantidad: aux?.cantidad })
  })

  return (
    <section className='w-full h-full'>
      {!isLoading ? (
        <div className='flex flex-col w-2/3  mx-auto'>
          {products.map((p, index) => (
            <CartItem
              key={p._id}
              price={p.precio}
              _id={p._id}
              quantity={p.cantidad ? p.cantidad : 1}
              nombre={p.nombre}
              img={p.img}
              bg={index % 2 === 0 ? true : false}
              handleCantidad={handleCantidad}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <Spinner className='w-10 h-10 mx-auto my-20' />
      )}
    </section>
  )
}
