import {
  AÑADIR_CARRO,
  MODIFICAR_PRODUCTO_CARRO,
  ELIMINAR_CARRO,
  ELIMINAR_CARRO_ALL,
} from '../../types'
import { useLocalStorage } from 'usehooks-ts'
import cartContext, { CarProduct } from './cartContext'
import cartReducer from './cartReducer'
import { PropsWithChildren, useReducer } from 'react'

const init = (): CarProduct[] => {
  let aux = localStorage.getItem('cart')
  let cart: CarProduct[] = aux !== null ? JSON.parse(aux) : []
  return cart
}

const CartProvider = ({ children }: PropsWithChildren) => {
  const cartInit = init()
  const initialState = {
    cart: cartInit,
  }

  const [state, dispatch] = useReducer(cartReducer, initialState)
  const [cart, setCart] = useLocalStorage<CarProduct[]>('cart', cartInit)

  const addCart = ({ _id, cantidad }: CarProduct) => {
    let index = null

    if (cart) {
      index = cart.findIndex(p => p._id === _id)
      if (index !== -1 && index !== null) {
        cart[index].cantidad = cart[index].cantidad + cantidad
      } else {
        cart.push({ _id, cantidad })
      }
    }
    console.log(cart)
    setCart(cart)

    dispatch({
      type: AÑADIR_CARRO,
      payload: cart,
    })
  }

  const deleteCartProduct = (id: string) => {
    let auxcart: CarProduct[]

    if (cart) {
      auxcart = cart.filter(producto => producto._id !== id)
      setCart(auxcart)
      dispatch({
        type: ELIMINAR_CARRO,
        payload: auxcart,
      })
    }
  }

  const deleteCartALL = () => {
    setCart([])

    dispatch({
      type: ELIMINAR_CARRO_ALL,
      payload: null,
    })
  }

  const updateProductCart = (_id: string, cantidad: number) => {
    let index = null

    if (cart) {
      index = cart.findIndex(p => p._id === _id)
      if (index !== -1 && index !== null) {
        cart[index].cantidad = cantidad
      }
    }

    setCart(cart)

    dispatch({
      type: MODIFICAR_PRODUCTO_CARRO,
      payload: cart,
    })
  }

  const value = {
    cart: state.cart,
    addCart,
    deleteCartProduct,
    deleteCartALL,
    updateProductCart,
  }

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>
}

export default CartProvider
