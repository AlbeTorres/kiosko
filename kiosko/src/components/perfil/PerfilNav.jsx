import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import productoContext from '../../context/productoContext/productoContext'

const PerfilNav = ({usuario}) => {

  const {perfilimg, nombre}= usuario

  const{establecerAccion}=useContext(productoContext);

  const establecerAccionAux=(accion)=>{
    establecerAccion({accion})

  }

  return (
    <div className=" h-52 mt-3 grid place-items-center text-black  rounded-b-lg  md:flex md:rounded-none md:h-20 md:px-4 mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8  ">
        <div className="flex items-center justify-between md:justify-start px-4 w-full ">
          <Link to={'/'} className="mr-4">Volver</Link>
          <label htmlFor="my-modal-6" 
            onClick={() => establecerAccionAux("editarperfil")}>Editar</label>
        </div>
        <div className="grid place-items-center md:flex md:justify-center md:items-center md:flex-row-reverse">
        <div className="avatar">
          <div className="w-24 md:w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={perfilimg} />
          </div>
        </div>
        <div className="my-2 md:w-44   ">
          <p>{nombre}</p>
        </div>

        </div>
      </div>
  )
}

export default PerfilNav