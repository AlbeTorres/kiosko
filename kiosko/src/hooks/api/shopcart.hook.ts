import { useQuery } from '@tanstack/react-query'
import { fetchShopCartProduct, fetchShopCartTotalPrice } from '../../lib/requests/shopcart.request'
import {
  FetchShopCartProductsInput,
  FetchShopCartTotalPriceInput,
} from '../../lib/requests/shopcart.type'

export const useAllCartProductPrice = (input: FetchShopCartTotalPriceInput) =>
  useQuery(['cartproductprice', input], () => fetchShopCartTotalPrice(input))

export const useAllCartProduct = (input: FetchShopCartProductsInput) =>
  useQuery(['cartproduct'], () => fetchShopCartProduct(input))
