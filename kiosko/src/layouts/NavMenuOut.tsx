import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NavMenuOut = () => {
  return (
    <div>
      <ul className='md:menu md:menu-horizontal p-0 hidden  '>
        <li className=''>
          <Link to={'/login'}>Login</Link>
        </li>
        <li className='ml-1'>
          <Link to={'/singup'}>Registrarse</Link>
        </li>
      </ul>
      <div className='dropdown dropdown-end md:hidden'>
        <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
          <div className='text-xl '>
            <FaBars />
          </div>
        </label>
        <ul
          tabIndex={0}
          className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 h-fit'
        >
          <div className='flex flex-col justify-center  '>
            <li className='my-3 ml-2 w-full block'>
              <Link to={'/login'} className='w-full block'>
                Login
              </Link>
            </li>
            <li className='my-3 ml-2 w-full block'>
              <Link to={'/singup'} className='w-full block'>
                Registrarse
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default NavMenuOut
