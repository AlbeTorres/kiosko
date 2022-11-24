import React from 'react'
import {FaUserPlus,FaArrowLeft} from 'react-icons/fa'
import Adminusercard from './Adminusercard'

const AdminUser = () => {
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

           <Adminusercard/>
           <Adminusercard/>
           <Adminusercard/>
           <Adminusercard/>
           <Adminusercard/>
           <Adminusercard/>
           <Adminusercard/>
           <Adminusercard/>
           <Adminusercard/>

        </div>
        </div>
    </div>
  )
}

export default AdminUser