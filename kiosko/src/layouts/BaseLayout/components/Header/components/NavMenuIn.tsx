import React from 'react'
import { useProfile } from '../../../../../hooks/api'
import { Link, useLocation } from 'react-router-dom'
import noimg from '../../../../../assets/noimg1.jpg'

const NavMenuIn = () => {
  const { data: usuario, isSuccess } = useProfile()
  let location = useLocation()

  return (
    <div className='dropdown dropdown-end'>
      {
        <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
          <figure className='w-10 h-10 rounded-full'>
            <img
              src={usuario?.usuario?.perfilimg ? usuario?.usuario.perfilimg : noimg}
              className='h-full w-full object-cover rounded-full'
            />
          </figure>
        </label>
      }
      <ul
        tabIndex={0}
        className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
      >
        <div className='flex flex-col justify-center '>
          {location.pathname !== '/perfil' && (
            <li className='my-3 md:my-1 ml-2 '>
              <Link className=' ' to={'/perfil'}>
                Perfil
              </Link>
            </li>
          )}
          {usuario?.usuario?.isAdmin && location.pathname === '/' ? (
            <div>
              <li className='my-3 md:my-1 ml-2'>
                <label className=' block ' htmlFor='my-modal-6'>
                  Añadir Producto
                </label>
              </li>
            </div>
          ) : null}

          <li className='my-3 ml-2'>
            <button className='w-full '>Cerrar Sesión</button>
          </li>
        </div>
      </ul>
    </div>
  )
}

export default NavMenuIn
