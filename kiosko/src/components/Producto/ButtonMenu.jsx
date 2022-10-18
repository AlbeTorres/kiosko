import React,{useState,useContext} from 'react';
import productoContext from '../../context/productoContext/productoContext';
import { FaShoppingCart } from "react-icons/fa";

const ButtonMenu = ({id, estado, admin}) => {

    const {establecerAccion, modificarProducto, agregarCarrito}=useContext(productoContext)
    
    const [estadoaux, setEstado]=useState(estado)
    const [cantidad, setCantidad]= useState(1)

   

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

    const restarCantidad=()=>{
        if(cantidad>1){
            setCantidad(cantidad-1)
        }
    }

    const añadirCarro=(id, cantidad)=>{
        agregarCarrito({_id:id,cantidad})
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
        <div className='flex flex-col justify-center items-center'>
            <button className="btn btn-ghost btn-xs flex items-center " onClick={()=>añadirCarro(id,cantidad)}>
                <span>Comprar</span>
                <FaShoppingCart className='ml-1'/>
            </button>
            <div>
                <button className="btn btn-ghost btn-sm mr-1 " onClick={()=>setCantidad(cantidad+1)}>
                    +
                </button>
                <input className='w-4 text-center' type='text' readOnly  value={cantidad}/>
                <button className="btn btn-ghost btn-sm mx-1  " onClick={restarCantidad}>
                    -
                    
                </button>

            </div>
        </div>
        }

    </div>

  )
}

export default ButtonMenu