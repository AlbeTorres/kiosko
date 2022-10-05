import React,{useContext, useEffect} from 'react';
import Producto from './Producto/Producto';
import productoContext from '../context/productoContext';

const Tablero = () => {

  const {productos, obtenerProductos}= useContext(productoContext);

  useEffect(()=>{
    obtenerProductos()
  },[])


  return (
    <div className='md:p-4'>
      <h2 className='m-4 text-2xl font-semibold'>Productos que Ofertamos</h2>
      <div className="w-full overflow-y-scroll h-screen md:h-96 grid grid-flow-row gap-y-4 mt-5 justify-center place-items-center  ">
        {productos.map(producto=>(<Producto key={producto._id} producto={producto} /> )  )}

      </div>

    </div>
  )
}

export default Tablero