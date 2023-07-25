import { CarProduct } from '../../context/productoContext/cartContext'
import { Product } from '../Models/Product.model'
import { Function } from './types'

export type FetchShopCartTotalPrice = Function<
  FetchShopCartTotalPriceInput,
  FetchShopCartTotalPriceOutput
>

export type FetchShopCartTotalPriceInput = { options: { cartproducts: string } }

export type FetchShopCartTotalPriceOutput = { totalCartPrice: number }
export type FetchShopCartTotalPriceData = { totalCartPrice: number }

export type FetchShopCartProducts = Function<
  FetchShopCartProductsInput,
  FetchShopCartProductsOutput
>

export type FetchShopCartProductsInput = { options: { cartproducts: string } }

export type FetchShopCartProductsOutput = Product[]
export type FetchShopCartProductsData = { cartproducts: Product[] }
