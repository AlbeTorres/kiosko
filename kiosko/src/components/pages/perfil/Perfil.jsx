import React from "react";
import {
  FaEnvelope,
  FaIdCard,
  FaMapMarkedAlt,
  FaMapSigns,
  FaPhoneAlt,
  FaUserLock,
} from "react-icons/fa";

const Perfil = () => {
  return (
    <div>
      <div className="bg-primary h-52 w-full grid place-items-center text-white ">
        <div className="flex items-center justify-between px-4 w-full ">
          <button>atras</button>
          <button>menu</button>
        </div>
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="mb-2">
          <p>Nombre</p>
        </div>
      </div>

      <div className="grid w-11/12 mx-auto place-items-start ">
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
        
        <div className='border-b w-full my-4'>
          <div className="flex items-center ">
            <FaUserLock />
            <p className="ml-1">Kyc</p>
          </div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Perfil;
