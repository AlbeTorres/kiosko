import React, {useContext, useEffect} from "react";
import productoContext from "../../../context/productoContext/productoContext";

const NavCarrito = () => {

  const {productos, carrito, obtenerProductos, obtenerCarrito, establecerAccion, eliminarCarrito, modificarProductoCarro}= useContext(productoContext);
  let monto = 0

  useEffect(()=>{
    obtenerCarrito();
    console.log(monto)
  },[monto])
  
  let cantida= carrito.length

  let compras=[]
  
  
  productos.map(producto=>{
    carrito.map(carro=>carro._id===producto._id && compras.push({...producto,cantidad:carro.cantidad}))
    
  })
  
  
  compras?.map( producto=> monto = monto + parseInt(producto?.precio)  )
  

  const establecerAccionAux=(accion)=>{
    establecerAccion({accion})

  }
  return (
     <div className="dropdown dropdown-end">
      <label tabIndex={1} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {cantida!==0 &&  
          <span className="badge badge-sm indicator-item">{cantida} </span>}
        </div>
      </label>
      <div
        tabIndex={1}
        className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg">{cantida} { cantida > 1 ? 'productos' : 'producto' } </span>
          <span className="text-info">Subtotal: ${monto} </span>
          <div className="card-actions">
            <label  htmlFor="my-modal-6" 
            onClick={() => establecerAccionAux("carro")}
            className="btn btn-primary btn-block">View cart</label>
          </div>
        </div>
      </div>
      </div>
  );
};

export default NavCarrito;
