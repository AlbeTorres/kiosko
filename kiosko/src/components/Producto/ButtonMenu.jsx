import React,{useState,useContext} from 'react';
import productoContext from '../../context/productoContext/productoContext';
import { FaShoppingCart } from "react-icons/fa";

const ButtonMenu = ({id, estado, admin}) => {

    const {establecerAccion, modificarProducto}=useContext(productoContext)
    
    const [estadoaux, setEstado]=useState(estado)

    const onClick=(accion)=>{
        establecerAccion({id,accion})
    }

    const modificarEstado =()=>{

        if( estadoaux==='abastecido'){
            modificarProducto(id, {estado: 'agotado'});
            setEstado('agotado');
        }else{

            modificarProducto(id, {estado: 'abastecido'})
            setEstado('abastecido');
        }
        
        

    }


  return (
    <div>
        {
            admin===true ?

        <div className="dropdown dropdown-end">
            <button tabIndex={0} className='btn btn-ghost'>Menu</button>
            <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-fit grid grid-flow-row gap-2">
                    <button onClick={()=>modificarEstado() } className="btn btn-ghost btn-xs">{estadoaux}</button>
                    <label onClick={()=>onClick('modificar')} htmlFor="my-modal-6" className="btn btn-ghost btn-xs">Modificar</label>
                    <label onClick={()=>onClick('eliminar')} htmlFor="my-modal-6" className="btn btn-ghost btn-xs">Eliminar</label>
            </ul>
        </div> 

        :

        <button className="btn btn-ghost btn-xs flex items-center ">
            <span>Comprar</span>
            <FaShoppingCart className='ml-1'/>
        </button>
        }

    </div>

  )
}

export default ButtonMenu