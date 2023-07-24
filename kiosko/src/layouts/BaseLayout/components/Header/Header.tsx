import Container from '../../../utils/Container'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import NavMenuOut from './components/NavMenuOut'
import { useEffect, useState } from 'react'
import NavMenuIn from './components/NavMenuIn'
import { useAuth } from '../../../../hooks/api'
import { NavShopCart } from './components/NavShopCart'

type HeaderProps = {
  handleOpen(): void
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
    <header className='bg-base-100 !fixed top-0  z-50   w-full md:py-4 min-h-6  '>
      <Container>
        <div className='flex justify-between items-center my-1'>
          <div className='flex items-center'>
            <FaShoppingCart className='text-xl' />
            <Link to={'/'} className='normal-case text-xl ml-1 '>
              {' '}
              Kiosquito
            </Link>
          </div>

          <div className='flex items-center gap-x-5'>
            <NavShopCart />

            {logged ? <NavMenuIn handleOpen={handleOpen} /> : <NavMenuOut />}
          </div>
        </div>
      </Container>
    </header>
  )
}
