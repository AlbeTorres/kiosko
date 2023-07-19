import { createContext } from 'react'

export type CarProduct = {
  _id: string
  cantidad: number
}

interface cartContext {
  cart: CarProduct[]
  addCart(prodct: CarProduct): void
  deleteCartProduct(id: string): void
  deleteCartALL(): void
  updateProductCart(id: string, cantidad: number): void
}

const cartContext = createContext<cartContext>(null)

export default cartContext
