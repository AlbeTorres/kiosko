import React, {useState} from "react";
import img from "../../../assets/noimg1.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";

const Adminusercard = () => {

    const [visible, setVisible]=useState(false)
    let baneado= true
  return (
    <div className="flex items-center justify-between gap-2 border-b-2 border-gray-200  rounded-b-md ">
      <figure className="md:w-16  md:h-16 w-14 h-14 rounded-full m-1 shadow-md relative  ">
        <FaCheckCircle className="text-blue-700 rounded-full bg-white text-lg  absolute bottom-1 right-2 "/>
        <img className="w-full h-full object-cover rounded-full" src={img} />
      </figure>
      <div className="flex-auto ml-5 md:flex md:items-center ">
      <div>
        <p className={baneado ? 'text-red-700': 'text-black'}>Alberto Torres Reyes</p>
        <p >Administrador</p>
      </div>
      <div className="md:items-center  md:ml-6  hidden md:flex  ">
        <p className="mr-2">CI:</p>
        <p className={baneado ? 'text-red-700': 'text-black'}>96032204741</p>
      </div>
      </div>


      <div className="mr-2 md:hidden">
            <FaHamburger onClick={()=>setVisible(!visible)} className='text-lg'/>
            {visible && 
            <ul className="mt-3 p-2 right-2 absolute shadow bg-base-100 rounded-md grid grid-flow-row gap-2">
                    <button className="btn btn-ghost btn-xs">targeta roja</button>
                    <button className="btn btn-ghost btn-xs">activar kyc</button>
                    <button className="btn btn-ghost btn-xs">modificar</button>
                    <button className="btn btn-ghost btn-xs">eliminar</button>
            </ul>}
        </div> 

        <div className=" hidden md:grid md:grid-cols-4 ">
        <button className="btn btn-ghost btn-xs">targeta roja</button>
                    <button className="btn btn-ghost btn-xs">activar kyc</button>
                    <button className="btn btn-ghost btn-xs">modificar</button>
                    <button className="btn btn-ghost btn-xs">eliminar</button>
        </div>
    </div>
  );
};

export default Adminusercard;
