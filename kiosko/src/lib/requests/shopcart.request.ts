import clienteAxios from '../../config/axios'
import { productsAdapter } from '../adapters/product.adapter'
import { shopCartAdapter } from '../adapters/shopcart.adapter'
import { FetchShopCartProducts, FetchShopCartTotalPrice } from './shopcart.type'

export const fetchShopCartTotalPrice: FetchShopCartTotalPrice = ({ options }) =>
  clienteAxios.get('api/shopcart', { params: options }).then(r => shopCartAdapter(r.data))

export const fetchShopCartProduct: FetchShopCartProducts = ({ options }) =>
  clienteAxios.get('api/shopcart/products', { params: options }).then(r => productsAdapter(r.data))
