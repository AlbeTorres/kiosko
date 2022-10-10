import React,{useContext} from 'react';
import productoContext from '../../context/productoContext'

const NavMenuContainer = () => {

  const {establecerAccion}=useContext(productoContext)

  const establecerAccionAux=(accion)=>{
    establecerAccion({accion})
  }

  const auth=true
  const admin= false;
  return (
    <ul
    tabIndex={0}
    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
  >
  { auth===true ? 

    <div>
    {
      admin===true ? 
      <div>
        <li>
        <label htmlFor="my-modal-6" onClick={()=>establecerAccionAux('crearproducto')}>Añadir Producto</label>
        </li> 
      </div>
    : <li>
      <label htmlFor="my-modal-6" onClick={()=>establecerAccionAux('carro')}>Carrito</label>
      </li>
    }
    
    
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