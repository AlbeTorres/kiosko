import React from 'react'
import {FaBell} from 'react-icons/fa'

const NavNotificacion = () => {
   
    let monto = 0
  
   
    
    let cantida= 10
  
    let pedidos=10
    let kyc= 10
    
    return (
       <div className="dropdown dropdown-end">
        <label tabIndex={1} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FaBell className="h-5 w-5"/>
            {cantida!==0 &&  
            <span className="badge badge-sm indicator-item">{cantida} </span>}
          </div>
        </label>
        <div
          tabIndex={1}
          className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div className="card-body">
          <div className=' flex items-center  justify-start my-1 cursor-pointer hover:bg-slate-100 p-2 rounded-md '>
            <span className="font-bold text-lg">{ pedidos > 1 ? 'nuevos pedidos' : 'nuevo pedido' } </span>
            <span className="text-info">{pedidos} </span>
          </div>
          <div className=' flex items-center  justify-start my-1 cursor-pointer hover:bg-slate-100 p-2 rounded-md '>
            <span className="font-bold text-lg">{  'nuevos kyc'  } </span>
            <span className="text-info">{pedidos} </span>

          </div>
            
          </div>
        </div>
        </div>
    );
}

export default NavNotificacion