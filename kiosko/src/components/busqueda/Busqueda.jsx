import React,{useContext} from 'react'
import productoContext from '../../context/productoContext/productoContext'

const Busqueda = () => {

  const {busqueda, establecerBusqueda}= useContext(productoContext);

    const onChange=e=>{
        establecerBusqueda(e.target.value) 
        console.log(busqueda)
    }

  return (
    <>
    <input
      type="search" name="busqueda" value={busqueda} onChange={onChange}
      placeholder="Search"
      className="input input-bordered w-48 absolute top-20 right-1/2  -mr-24 md:m-0 md:static "
    />
  </>
    
  )
}

export default Busqueda;