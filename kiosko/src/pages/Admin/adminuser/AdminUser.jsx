import React,{useContext, useEffect, useState} from 'react'
import {FaUserPlus,FaArrowLeft} from 'react-icons/fa'
import Adminusercard from './Adminusercard'
import usuarioContext from '../../../context/usuarioContext/usuarioContext'
import productoContext from '../../../context/productoContext/productoContext'
import Modal from '../../../components/layout/Modal'

const AdminUser = () => {

  const{usuarios, usuariom, obtenerUsuarios, obtenerUsuario, modificarUsuario}=useContext(usuarioContext)
  const {establecerAccion}=useContext(productoContext)

  const establecerAccionAux = (id,accion) => {
    establecerAccion({ id,accion });
    
  };


  useEffect(()=>{
    obtenerUsuarios()
   
  },[])

 



  return (
    <div >
        <div className='navbar bg-primary text-primary-content'>
        <div className='flex w-full md:w-11/12 mx-auto items-center justify-between px-2'>
        <div className='flex items-center '>
            <button><FaArrowLeft className='text-xl '/></button>
            <p className='ml-2 hidden md:block' >atrás</p>

        </div>
        <div className='flex items-center '>
        <p className='mr-2 hidden md:block'>añadir usuario</p>
            <button><FaUserPlus className='text-xl'/></button>

        </div>

        </div>
        </div>
        <div className=' px-2 md:w-3/4 md:mx-auto'>

        <div className='  overflow-y-auto md:overflow-hidden md:hover:overflow-auto '>
           <h2 className='w-full text-center rounded-t-md text-lg font-bold bg-primary text-white mt-5 p-2'>
            Usuarios
           </h2>
            {usuarios?.map(usuario=><Adminusercard key={usuario?._id} id={usuario._id}  email={usuario.email } kyc={usuario?.kyc} img={usuario?.perfilimg} kycimg={usuario?.kycimg}  carnet={usuario?.carnet} isAdmin={usuario?.isAdmin} nombre={usuario?.nombre } modal={establecerAccionAux} advertencia={usuario?.advertencia} />)}

        </div>
        </div>
        <Modal/>
    </div>

  )
}

export default AdminUser