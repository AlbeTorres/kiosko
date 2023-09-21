import {
  AÑADIR_CARRO,
  ELIMINAR_CARRO,
  ELIMINAR_CARRO_ALL,
  MODIFICAR_PRODUCTO_CARRO,
} from '../../types'
import { CarProduct } from './cartContext'

type CartActionAdd = { type: AÑADIR_CARRO; payload: CarProduct[] }
type CartActionDel = { type: ELIMINAR_CARRO; payload: CarProduct[] }
type CartActionDelAll = { type: ELIMINAR_CARRO_ALL; payload: null }
type CartActionUpdate = { type: MODIFICAR_PRODUCTO_CARRO; payload: CarProduct[] }

type initialState = {
  cart: CarProduct[]
}

type CartAction = CartActionAdd | CartActionDel | CartActionDelAll | CartActionUpdate

export default (state: initialState, action: CartAction) => {
  switch (action.type) {
    case AÑADIR_CARRO:
      return {
        ...state,
        cart: action.payload,
      }
    case MODIFICAR_PRODUCTO_CARRO:
      return {
        ...state,
        cart: action.payload,
      }
    case ELIMINAR_CARRO:
      return {
        ...state,
        cart: action.payload,
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
