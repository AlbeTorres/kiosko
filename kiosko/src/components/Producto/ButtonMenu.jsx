import React from 'react'

const ButtonMenu = () => {

    let admin=true
  return (
    <div>
        {
            admin ?

        <div className="dropdown dropdown-end">
            <button tabIndex={0} className='btn btn-ghost'>Menu</button>
            <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-fit grid grid-flow-row gap-2">
                    <button className="btn btn-ghost btn-xs">Agotado</button>
                    <button className="btn btn-ghost btn-xs">Modificar</button>
                    <button className="btn btn-ghost btn-xs">Eliminar</button>
            </ul>
        </div> 

        :

        <button className="btn btn-ghost btn-xs">Modificar</button>
        }

    </div>

  )
}

export default ButtonMenu