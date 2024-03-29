import { useContext } from 'react'
import { Product } from '../../../lib/Models/Product.model'
import { CartItem } from './CartItem'
import cartContext from '../../../context/cartContext/cartContext'
import { useAllCartProduct } from '../../../hooks/api/shopcart.hook'
import { Spinner } from '../../../components-libs/Spinner'
import { Button } from '../../../components-libs/Button'
import { Link, useNavigate } from 'react-router-dom'
import { CartItemTittle } from './CartItemTittle'
import { CartItemTotal } from './CartItemTotal'
import { FaShoppingCart } from 'react-icons/fa'

export type ProductCart = Product & {
  cantidad: number | undefined
}

export const CartProductList = () => {
  const navigate = useNavigate()
  const context = useContext(cartContext)
  let total: number = 0
  let cantidad: number = 0

  const { data: productcart, isLoading } = useAllCartProduct({
    options: { cartproducts: JSON.stringify(context?.cart) },
  })

  const handleCantidad = (id: string, cantidad: number) => {
    context?.updateProductCart(id, cantidad)
  }

  const handleDelete = (_id: string) => {
    context?.deleteCartProduct(_id)
  }

  let products: ProductCart[] = []

  context?.cart.map(p => {
    let aux = productcart?.find(c => c._id === p._id)

    if (aux) {
      cantidad = cantidad + p.cantidad
      total = total + aux.precio * p.cantidad
      products.push({ ...aux, cantidad: p?.cantidad })
    }
  })

  return (
    <section className='w-full h-full'>
      {!isLoading ? (
        <div className='flex flex-col w-full   lg:w-2/3  mx-auto h-[500px] overflow-y-auto'>
          {products.length > 0 ? (
            <>
              <CartItemTittle />
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
              <CartItemTotal total={total} cantidad={cantidad} />
              <div className='mt-10 w-full flex justify-end '>
                <Button
                  onClick={() => navigate('/checkout')}
                  className='flex btn-sm !h-10 items-center gap-x-2 btn-primary'
                >
                  <p>Comprar</p>
                  <FaShoppingCart />
                </Button>
              </div>
            </>
          ) : (
            <div className='mt-20 flex flex-col items-center justify-center gap-y-5'>
              <h1 className='text-2xl md:text-4xl text-center'>No hay productos en el carro </h1>
              <Link to={'/'}>
                <Button className='btn-primary w-fit'> Seguir comprando</Button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <Spinner className='w-10 h-10 mx-auto my-20' />
      )}
    </section>
  )
}
