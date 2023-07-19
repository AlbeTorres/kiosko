import { CarProduct } from '../../context/productoContext/cartContext'
import { Function } from './types'

export type FetchShopCartTotalPrice = Function<
  FetchShopCartTotalPriceInput,
  FetchShopCartTotalPriceOutput
>

export type FetchShopCartTotalPriceInput = { options: { cartproducts: string } }

export type FetchShopCartTotalPriceOutput = { totalCartPrice: number }
export type FetchShopCartTotalPriceData = { totalCartPrice: number }
