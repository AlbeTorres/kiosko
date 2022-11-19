import React from 'react'
import {FaUserPlus,FaArrowLeft} from 'react-icons/fa'

const AdminUser = () => {
  return (
    <div >
        <div className='navbar bg-primary text-primary-content'>
        <div className='flex w-full items-center justify-between px-2'>
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
        <div className='border-2 border-gray-200 rounded-b-md overflow-y-auto '>
           
        </div>
    </div>
  )
}

export default AdminUser