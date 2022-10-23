import React from "react";
import {
  FaEnvelope,
  FaIdCard,
  FaMapMarkedAlt,
  FaMapSigns,
  FaPhoneAlt,
  FaUserLock,
} from "react-icons/fa";
import img2 from '../../../assets/1.jpg'

const Perfil = () => {
  return (
    <div>
      <div className=" h-52 w-full grid place-items-center text-black  rounded-b-lg  md:flex md:rounded-none md:h-20 md:px-4  ">
        <div className="flex items-center justify-between md:justify-start px-4 w-full ">
          <button className="mr-4">Volver</button>
          <button>Editar</button>
        </div>
        <div className="grid place-items-center md:flex md:justify-center md:items-center md:flex-row-reverse">
        <div className="avatar">
          <div className="w-24 md:w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="my-2 md:w-32 ">
          <p>Geustakio Perez</p>
        </div>

        </div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-x-8 md:mt-8  md:h-full w-11/12 mx-auto place-items-start ">
        <div className="md:w-full">

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
    </div>
  );
};

export default Perfil;
