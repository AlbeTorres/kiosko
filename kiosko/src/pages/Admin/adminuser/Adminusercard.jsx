import React, {useState, useEffect, useContext} from "react";
import usuarioContext from "../../../context/usuarioContext/usuarioContext";
import { FaCheckCircle } from "react-icons/fa";
import { FaBars, FaExclamationCircle } from "react-icons/fa";

const Adminusercard = ({img, email,nombre, isAdmin, carnet,kyc,kycimg, modal,id, advertencia}) => {


    const{usuariom, obtenerUsuario, modificarUsuario}=useContext(usuarioContext)
    const [visible, setVisible]=useState(false)
    
    let baneado= true
    let kycnoti=false
    let rol
    let bg='bg-white'
    isAdmin ? rol='Administrador': rol='Cliente'
    
    
    const[advertencias, setAdvertencias]=useState(advertencia)
    const ponerAdvertencia=()=>{
      let aux = advertencias
      if(aux<3){
        aux=aux+1
        setAdvertencias(aux)
      }else{
        aux=1
        setAdvertencias(1)
      }

      modificarUsuario(id,{advertencia:aux})

  }
    
    advertencia===3 ? bg='bg-red-500': advertencia===2 ? bg='bg-yellow-500': bg='bg-white'

    
    if(kyc===false && kycimg!==null){
        kycnoti=true
    }

  return (
    <div className={ `flex items-center justify-between gap-2 border-b-2 border-gray-200  rounded-b-md ${bg}`}>
      <figure className="md:w-16  md:h-16 w-14 h-14 rounded-full m-1 shadow-md relative  ">
        {kyc===true && <FaCheckCircle className="text-blue-700 rounded-full bg-white text-lg  absolute bottom-1 right-2 "/>}
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
            {
                !isAdmin &&
                    <button className="btn btn-ghost btn-xs">Activar kyc</button>
            }
            {
                !isAdmin &&
                    <button onClick={ponerAdvertencia} className="btn btn-ghost btn-xs">Advertencia</button>
            }
                    <button className="btn btn-ghost btn-xs">Ver usuario</button>
            </ul>}
        </div> 

        <div className=" hidden md:grid md:grid-cols-4 ">
        {
                !isAdmin &&
                    <button className="btn btn-ghost btn-xs">Activar kyc</button>
            }
            {
                !isAdmin &&
                    <button onClick={ponerAdvertencia} className="btn btn-ghost btn-xs">Advertencia</button>
            }
                    <label htmlFor="my-modal-6" onClick={()=>(modal('adminuser'))} className="btn btn-ghost btn-xs">Ver usuario</label>   
        </div>
    </div>
  );
};

export default Adminusercard;
