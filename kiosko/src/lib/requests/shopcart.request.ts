import clienteAxios from '../../config/axios'
import { shopCartAdapter } from '../adapters/shopcart.adapter'
import { FetchShopCartTotalPrice } from './shopcart.type'

export const fetchShopCartTotalPrice: FetchShopCartTotalPrice = ({ options }) =>
  clienteAxios.get('api/shopcart', { params: options }).then(r => shopCartAdapter(r.data))
