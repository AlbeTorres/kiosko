import { useQuery } from '@tanstack/react-query'
import {
  fetchDeliveryCost,
  fetchShopCartProduct,
  fetchShopCartTotalPrice,
} from '../../lib/requests/shopcart.request'
import {
  FetchDeliveryCostInput,
  FetchShopCartProductsInput,
  FetchShopCartTotalPriceInput,
} from '../../lib/requests/shopcart.type'

export const useAllCartProductPrice = (input: FetchShopCartTotalPriceInput) =>
  useQuery(['cartproductprice', input], () => fetchShopCartTotalPrice(input))

export const useAllCartProduct = (input: FetchShopCartProductsInput) =>
  useQuery(['cartproduct', input], () => fetchShopCartProduct(input))

export const useDeliveryCost = (input: FetchDeliveryCostInput) =>
  useQuery(['deliverycost'], () => fetchDeliveryCost(input))
