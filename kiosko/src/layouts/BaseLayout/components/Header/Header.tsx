import Container from '../../../utils/Container'
import { Location } from 'react-router-dom'
import NavMenuOut from './components/NavMenuOut'
import { useEffect, useState } from 'react'
import NavMenuIn from './components/NavMenuIn'
import { useAuth } from '../../../../hooks/api'
import { NavShopCart } from './components/NavShopCart'
import { HeaderSearch } from './components/HeaderSearch'
import { Logo } from '../../../Logo/Logo'

type HeaderProps = {
  handleOpen(): void
  location: Location
}

export const Header = ({ handleOpen }: HeaderProps) => {
  const [logged, setLogged] = useState(false)
  const auth = useAuth()

  useEffect(() => {
    if (auth?.data) {
      setLogged(true)
    } else setLogged(false)
  }, [auth?.data])

  return (
    <header className='bg-base-100/80 backdrop-blur-lg !sticky top-0 mb-5 z-50 py-2 w-full h-fit '>
      <Container>
        <div className='flex justify-between items-center mb-1'>
          <Logo />

          <div className='flex items-center gap-x-5'>
            {location.pathname === '/' && <HeaderSearch />}
            <NavShopCart />

            {logged ? <NavMenuIn handleOpen={handleOpen} /> : <NavMenuOut />}
          </div>
        </div>
      </Container>
    </header>
  )
}
