import { useQuery } from '@tanstack/react-query'
import { fetchShopCartTotalPrice } from '../../lib/requests/shopcart.request'
import { FetchShopCartTotalPriceInput } from '../../lib/requests/shopcart.type'

export const useAllCartProductPrice = (input: FetchShopCartTotalPriceInput) =>
  useQuery(['cartproductprice', input], () => fetchShopCartTotalPrice(input))
