import React,{useContext} from 'react'
import productoContext from '../../context/productoContext/productoContext'

const Busqueda = () => {

  const {busqueda, establecerBusqueda}= useContext(productoContext);

    const onChange=e=>{
        establecerBusqueda(e.target.value) 
        console.log(busqueda)
    }

  return (
    <div className="form-control absolute top-20 right-20 md:relative md:top-0 md:right-0  ">
    <input
      type="search" name="busqueda" value={busqueda} onChange={onChange}
      placeholder="Search"
      className="input input-bordered"
    />
  </div>
    
  )
}

export default Busqueda;