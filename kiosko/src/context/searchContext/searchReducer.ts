import { OBTENER_BUSQUEDA } from '../../types'

type initialState = {
  search: string
}

type SearchAction = {
  type: OBTENER_BUSQUEDA
  payload: string
}

export default (state: initialState, action: SearchAction) => {
  switch (action.type) {
    case OBTENER_BUSQUEDA:
      return {
        ...state,
        search: action.payload,
      }
    default:
      return state
  }
}
