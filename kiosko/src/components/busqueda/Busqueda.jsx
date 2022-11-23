import React,{useContext} from 'react'
import productoContext from '../../context/productoContext/productoContext'

const Busqueda = () => {

  const {busqueda, establecerBusqueda}= useContext(productoContext);

    const onChange=e=>{
        establecerBusqueda(e.target.value) 
        console.log(busqueda)
    }

  return (
    <div className="w-48 absolute top-20 right-1/2  -mr-24 md:mr-6  md:relative md:top-0 md:right-0  ">
    <input
      type="search" name="busqueda" value={busqueda} onChange={onChange}
      placeholder="Search"
      className="input input-bordered"
    />
  </div>
    
  )
}

export default Busqueda;