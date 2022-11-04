import React from 'react'
import img2 from '../../assets/1.jpg'
import {
  FaEnvelope,
  FaIdCard,
  FaMapMarkedAlt,
  FaMapSigns,
  FaPhoneAlt,
  FaUserLock,
} from "react-icons/fa";

const PerfilDatos = () => {
  return (
    <div className="grid w-11/12 md:grid-cols-2 md:gap-x-8 md:mt-8  md:h-full  place-items-start mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8 ">
    <div className="md:w-full w-full">

    <div className="border-b w-full my-4     ">
      <div className="flex items-center ">
        <FaEnvelope />
        <p className="ml-1">Correo</p>
      </div>
      <p className="ml-5">correo@eso.com</p>
    </div>
    <div className="border-b w-full my-4     ">
      <div className="flex items-center ">
        <FaPhoneAlt  />
        <p className="ml-1">Móvil</p>
      </div>
      <p className="ml-5">+53xxxxxxxx</p>
    </div>
    <div className="border-b w-full my-4     ">
      <div className="flex items-center ">
        <FaMapMarkedAlt  />
        <p className="ml-1">Provincia</p>
      </div>
      <p className="ml-5">Artemisa</p>
    </div>
    <div className="border-b w-full my-4     ">
      <div className="flex items-center ">
        <FaMapSigns />
        <p className="ml-1">Municipio</p>
      </div>
      <p className="ml-5">Artemisa</p>
    </div>
    </div>
    
    <div className=' w-full my-4'>
      <div className="flex items-center ">
        <FaUserLock />
        <p className="ml-1">Kyc</p>
      </div>
      <figure className="w-3/4 mx-auto rounded-md shadow-md">
      <img className="w-full object-cover rounded-md" src={img2} alt="" />

      </figure>
    </div>
  </div>
  )
}

export default PerfilDatos