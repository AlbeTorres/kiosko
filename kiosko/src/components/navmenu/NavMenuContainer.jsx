import React from 'react'

const NavMenuContainer = () => {

  const auth=false
  return (
    <ul
    tabIndex={0}
    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
  >
  { auth===true ? 

    <div>
    <li>
      <a>Añadir Producto</a>
    </li>
    <li>
      <a>Logout</a>
    </li>

  </div>
  :

  <div>
  <li>
      <a>Login</a>
    </li>
  </div>
  }
  

  
  </ul>
  )
}

export default NavMenuContainer