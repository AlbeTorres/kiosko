import clienteAxios from '../../config/axios'
import { productsAdapter } from '../adapters/product.adapter'
import { deliveryCostAdapter, shopCartAdapter } from '../adapters/shopcart.adapter'
import { FetchDeliveryCost, FetchShopCartProducts, FetchShopCartTotalPrice } from './shopcart.type'

export const fetchShopCartTotalPrice: FetchShopCartTotalPrice = ({ options }) =>
  clienteAxios.get('api/shopcart', { params: options }).then(r => shopCartAdapter(r.data))

export const fetchShopCartProduct: FetchShopCartProducts = ({ options }) =>
  clienteAxios.get('api/shopcart/products', { params: options }).then(r => productsAdapter(r.data))

export const fetchDeliveryCost: FetchDeliveryCost = ({ options }) =>
  clienteAxios
    .get('api/shopcart/deliverycost', { params: options })
    .then(r => deliveryCostAdapter(r.data))
