import React from 'react'

const PerfilNav = () => {
  return (
    <div className=" h-52 w-full grid place-items-center text-black  rounded-b-lg  md:flex md:rounded-none md:h-20 md:px-4  ">
        <div className="flex items-center justify-between md:justify-start px-4 w-full ">
          <button className="mr-4">Volver</button>
          <button>Editar</button>
        </div>
        <div className="grid place-items-center md:flex md:justify-center md:items-center md:flex-row-reverse">
        <div className="avatar">
          <div className="w-24 md:w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="my-2 md:w-32 ">
          <p>Geustakio Perez</p>
        </div>

        </div>
      </div>
  )
}

export default PerfilNav