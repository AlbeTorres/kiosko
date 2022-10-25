import React from 'react'

const PayNav = () => {
  return (
    <div className="navbar bg-base-100 md:px-4 px-2">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">Entrega</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0 ">
        <li>
          <a>Mapa</a>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default PayNav