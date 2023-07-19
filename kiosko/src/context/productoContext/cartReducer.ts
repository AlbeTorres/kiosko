import { Product } from '../../lib/Models/Product.model'
import {
  AÑADIR_CARRO,
  ELIMINAR_CARRO,
  ELIMINAR_CARRO_ALL,
  MODIFICAR_PRODUCTO_CARRO,
  OBTENER_CARRO,
} from '../../types'

import { CarProduct } from './cartContext'

export type CartActionType =
  | AÑADIR_CARRO
  | ELIMINAR_CARRO
  | ELIMINAR_CARRO_ALL
  | OBTENER_CARRO
  | MODIFICAR_PRODUCTO_CARRO

export type CartPayload = CarProduct
export type CartPayloadAll = CarProduct[]

export interface CartAction {
  type: CartActionType
  payload?: CartPayload
  payloadcart?: CartPayloadAll
}

export default (state: { cart: CartPayload[] }, action: CartAction) => {
  switch (action.type) {
    case AÑADIR_CARRO:
      return {
        ...state,
        cart: action.payloadcart,
      }
    case MODIFICAR_PRODUCTO_CARRO:
      return {
        ...state,
        cart: action.payloadcart,
      }
    case ELIMINAR_CARRO:
      return {
        ...state,
        cart: action.payloadcart,
      }
    case ELIMINAR_CARRO_ALL:
      return {
        ...state,
        cart: [],
      }
    default:
      return state
  }
}
