import {
  FetchShopCartTotalPriceData,
  FetchShopCartTotalPriceOutput,
} from '../requests/shopcart.type'

export const shopCartAdapter = (
  data: FetchShopCartTotalPriceData,
): FetchShopCartTotalPriceOutput => ({ totalCartPrice: data.totalCartPrice })
