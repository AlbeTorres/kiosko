import React,{useContext, useEffect} from 'react';
import Producto from './Producto/Producto';
import productoContext from '../context/productoContext/productoContext';

const Tablero = () => {

  let loguaedo=false;
  let productosaux=[];

  const {productos, obtenerProductos}= useContext(productoContext);

  useEffect(()=>{
    obtenerProductos()
  },[])

  loguaedo===true ? productosaux =productos : productosaux= productos.filter(producto=>producto.estado==='abastecido')


  return (
    <div className='px-4 pt-4'>
      <h2 className='m-4  text-2xl font-semibold'>Productos que Ofertamos</h2>
      <div className="w-full overflow-y-scroll h-screen md:h-96 grid grid-flow-row gap-y-4 mt-5 justify-center place-items-center  ">
        {productosaux.map(producto=>(<Producto key={producto._id} producto={producto} /> )  )}

      </div>

    </div>
  )
}

export default Tablero