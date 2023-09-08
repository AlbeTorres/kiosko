import { Product } from '../Models/Product.model'
import { Function } from './types'

export type FetchShopCartTotalPrice = Function<
  FetchShopCartTotalPriceInput,
  FetchShopCartTotalPriceOutput
>

export type FetchShopCartTotalPriceInput = { options: { cartproducts: string } }

export type FetchShopCartTotalPriceOutput = { totalCartPrice: number }
export type FetchShopCartTotalPriceData = { totalCartPrice: number }

export type FetchDeliveryCost = Function<FetchDeliveryCostInput, FetchDeliveryCostOutput>

export type FetchDeliveryCostInput = { options: { municipio: string; provincia: string } }

export type FetchDeliveryCostOutput = number
export type FetchDeliveryCostData = { valor_envio: number }

export type FetchShopCartProducts = Function<
  FetchShopCartProductsInput,
  FetchShopCartProductsOutput
>

export type FetchShopCartProductsInput = { options: { cartproducts: string } }

export type FetchShopCartProductsOutput = Product[]
export type FetchShopCartProductsData = { cartproducts: Product[] }
