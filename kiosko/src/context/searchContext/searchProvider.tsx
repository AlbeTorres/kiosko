import { PropsWithChildren, useReducer } from 'react'
import searchContext from './searchContext'
import { OBTENER_BUSQUEDA } from '../../types'
import searchReducer from './searchReducer'

const SearchProvider = ({ children }: PropsWithChildren) => {
  const initialState = {
    search: '',
  }

  const [state, dispatch] = useReducer(searchReducer, initialState)

  const setSeacrh = (search: string) => {
    dispatch({
      type: OBTENER_BUSQUEDA,
      payload: search,
    })
  }

  const value = {
    search: state.search,
    setSearch: setSeacrh,
  }

  return <searchContext.Provider value={value}>{children}</searchContext.Provider>
}

export default SearchProvider
