import { useContext } from 'react'
import searchContext from '../../../../../context/searchContext/searchContext'
import cn from '../../../../../util/cn'
import { useScrolled } from '../../../../../hooks/utils/useScrolled'

export const HeaderSearch = () => {
  const context = useContext(searchContext)

  const scrolled = useScrolled()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    context?.setSearch(e.target.value)
  }

  return (
    <input
      type='search'
      name='busqueda'
      value={context?.search}
      onChange={onChange}
      placeholder='Buscar...'
      className={cn(
        'input !h-10 input-bordered w-48 absolute top-20 right-1/2  -mr-24 md:m-0 md:static ',
        scrolled ? 'hidden md:block' : '',
      )}
    />
  )
}
