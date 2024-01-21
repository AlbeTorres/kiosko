import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'

export const Logo = () => (
  <div className='flex items-center'>
    {/* <FaShoppingCart className='text-xl' /> */}
    <img src={logo} className='w-10 h-10' />
    <Link to={'/'} className='normal-case text-xl ml-1 '>
      Kiosquito
    </Link>
  </div>
)
