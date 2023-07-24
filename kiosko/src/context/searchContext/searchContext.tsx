import { createContext } from 'react'

interface searchContext {
  search: string
  setSearch(search: string): void
}

const searchContext = createContext<searchContext | null>(null)

export default searchContext
