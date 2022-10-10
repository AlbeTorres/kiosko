import React from 'react'
import img from '../../assets/1.jpg';
import { FaPlusCircle, FaTrashAlt, FaMinusCircle } from 'react-icons/fa';

const CarroItem = () => {
  return (
    <div className='flex items-center justify-between p-2 my-2 border-2 rounded-lg  '>
        <div className='flex items-center justify-center'>
            <figure className="w-12 h-12 ">
                <img src={img}  alt="producto carrito"/>
            </figure>
            <div className='mx-2'>
                <h2 className='text-xl'>Tomate</h2>
                <div className='flex items-center justify-center'>
                    <p className='mr-2'>5<span>LB</span></p>
                    <p><span>$</span>12</p>

                </div>
            </div>
        </div>
        <div className='flex items-center justify-end text-2xl w-1/2 '>
            <button className='mr-4 text-primary' ><FaPlusCircle/></button>
            <button className='mr-4' ><FaMinusCircle/></button>
            <button className='text-red-600'><FaTrashAlt/></button>
        </div>
    </div>
  )
}

export default CarroItem;