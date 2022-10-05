import React from 'react'
import EliminarProducto from './form/EliminarProducto'
import ModificarProducto from './form/ModificarProducto';

const Modal = () => {

  let modi=true;
  return (
    <div>
    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
    <div className="modal modal-bottom sm:modal-middle">

    {modi===true ? 
      <ModificarProducto/>
      :

      <EliminarProducto/>
    }
    </div>
    </div>
  )
}

export default Modal