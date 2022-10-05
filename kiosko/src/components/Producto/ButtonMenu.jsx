import React,{useState} from 'react'

const ButtonMenu = ({id, estado}) => {

    let admin=true
    const [estadoaux, setEstado]=useState(estado)

    const onClick=(eso)=>{
        console.log(eso, id)
    }

    const modificarEstado =()=>{

        estadoaux==='abastecido' ? setEstado('agotado'): setEstado('abastecido')
        

    }


  return (
    <div>
        {
            admin ?

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

        <button className="btn btn-ghost btn-xs">Modificar</button>
        }

    </div>

  )
}

export default ButtonMenu