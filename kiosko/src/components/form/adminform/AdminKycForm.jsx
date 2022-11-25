import React,{useContext, useEffect} from 'react'
import productoContext from '../../../context/productoContext/productoContext'
import usuarioContext from '../../../context/usuarioContext/usuarioContext'
productoContext

const AdminKycForm = () => {

    const {accion}=useContext(productoContext);
    const {obtenerUsuario,modificarUsuario, usuariom}= useContext(usuarioContext)

    console.log(usuariom)
    
    useEffect(()=>{
      obtenerUsuario(accion.id)
    },[])

    const validar=()=>{
        modificarUsuario({kyc:true})
    }
    

  return (
    <div className='modal-box grid gap-8 place-items-center '>
        <figure className='h-60 w-60 md:h-48 rounded-md  '>
            <img className='h-full w-full object-cover rounded-md' src={usuariom?.kycimg } alt="" />
        </figure>
        <div className='w-full text-center'>
        <label className=' w-ful'>Carnet:</label>
        <p className='w-full text-xl font-semibold '>{usuariom?.carnet}</p>

        </div>
        <div className='flex items-center justify-center '>
            <button className='btn mr-4'>Validar</button>
            <label htmlFor="my-modal-6" className='btn btn-secondary'>Declinar</label>
        </div>
    </div>
  )
}

export default AdminKycForm