import React, {useState} from "react";
import img from "../../../assets/noimg1.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { FaBars, FaExclamationCircle } from "react-icons/fa";

const Adminusercard = ({img, email,nombre, isAdmin, carnet,kyc,kycimg}) => {

    const [visible, setVisible]=useState(false)
    let baneado= true
    let kycnoti=false
    let rol
    isAdmin ? rol='Administrador': rol='Cliente'

    console.log(kycimg)
    console.log(kyc)
    if(kyc===false && kycimg!==null){
        kycnoti=true
    }

  return (
    <div className="flex items-center justify-between gap-2 border-b-2 border-gray-200  rounded-b-md ">
      <figure className="md:w-16  md:h-16 w-14 h-14 rounded-full m-1 shadow-md relative  ">
        <FaCheckCircle className="text-blue-700 rounded-full bg-white text-lg  absolute bottom-1 right-2 "/>
        <img className="w-full h-full object-cover rounded-full" src={img} />
      </figure>
      <div className="flex-auto ml-5 md:flex md:items-center ">
      <div>
        <p className={baneado ? 'text-red-700': 'text-black'}>{nombre}</p>
        <p >{rol}</p>
      </div>
      <div className="md:items-center  md:ml-6  hidden md:flex  ">
        <p className="mr-2">CI:</p>
        <p className={baneado ? 'text-red-700': 'text-black'}>{carnet}</p>
      </div>
      </div>

      {kycnoti && <FaExclamationCircle className="text-red-700 "/> }


      <div className="mr-2 md:hidden">
            <FaBars onClick={()=>setVisible(!visible)} className='text-lg'/>
            {visible && 
            <ul className="mt-3 p-2 right-2 absolute shadow bg-base-100 rounded-md grid grid-flow-row gap-2">
                    <button className="btn btn-ghost btn-xs">Activar kyc</button>
                    <button className="btn btn-ghost btn-xs">Advertencia</button>
                    <button className="btn btn-ghost btn-xs">Ver usuario</button>
            </ul>}
        </div> 

        <div className=" hidden md:grid md:grid-cols-4 ">
                    <button className="btn btn-ghost btn-xs">Activar kyc</button>
                    <button className="btn btn-ghost btn-xs">Advertencia</button>
                    <button className="btn btn-ghost btn-xs">Ver usuario</button>   
        </div>
    </div>
  );
};

export default Adminusercard;
