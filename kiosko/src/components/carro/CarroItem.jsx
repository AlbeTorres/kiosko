import React,{useState} from 'react'

import { FaPlusCircle, FaTrashAlt, FaMinusCircle } from 'react-icons/fa';

const CarroItem = ({producto, modi, eliminar}) => {

    
    const {_id, cantidad, precio, medida, img, nombre}= producto;
    
    let cant = cantidad

    const restarCantidad=()=>{
        if(cant>1){
            cant = cant-1
            modi(_id, cant)
        }
    }
    
    const sumarCantidad=()=>{
        
        cant = cant+1
        modi(_id, cant)
        
    }
    
    
  return (
    <div className='flex items-center justify-between p-2 my-2 border-2 rounded-lg  '>
        <div className='flex items-center justify-center rounded-md '>
            <figure className="w-12 h-12 rounded-md ">
                <img src={img} className='w-full h-full object-cover rounded-md '  alt="producto carrito"/>
            </figure>
            <div className='mx-2'>
                <h2 className='text-md sm:text-xl truncate w-7 xs:w-14 '>{nombre}</h2>
                <div className='flex items-center justify-center'>
                    <p className='mr-2'>{cant}<span>{medida}</span></p>
                    <p><span>$</span>{precio*cantidad}</p>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-end text-2xl w-1/2 '>
            <button  onClick={sumarCantidad} className='mr-4 text-primary' ><FaPlusCircle/></button>
            <button  onClick={restarCantidad} className='mr-4' ><FaMinusCircle/></button>
            <button onClick={()=>eliminar(_id)} className='text-red-600'><FaTrashAlt/></button>
        </div>
    </div>
  )
}

export default CarroItem;