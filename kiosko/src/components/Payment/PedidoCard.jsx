import React from 'react'

const PedidoCard = ({nombre,cantidad,precio}) => {
  return (
    <div className=" flex my-4 border-b  ">
          <label className="mr-2">prod:</label>
            <p className="mr-4">{nombre}</p>
          <label className="mr-2">cant:</label>
            <p className="mr-4">{cantidad}</p>
          <label className="mr-2">$</label>
            <p className="mr-4">{precio}</p>
          </div>
  )
}

export default PedidoCard