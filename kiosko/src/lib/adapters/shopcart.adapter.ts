import {
  FetchDeliveryCostData,
  FetchDeliveryCostOutput,
  FetchShopCartTotalPriceData,
  FetchShopCartTotalPriceOutput,
} from '../requests/shopcart.type'

export const shopCartAdapter = (
  data: FetchShopCartTotalPriceData,
): FetchShopCartTotalPriceOutput => ({ totalCartPrice: data.totalCartPrice })

export const deliveryCostAdapter = (data: FetchDeliveryCostData): FetchDeliveryCostOutput =>
  data.valor_envio
