import React from 'react'

const PayForm = () => {
  return (
    <div className="md:relative">
    <h2 className="text-center text-xl font-semibold my-5 ">
      Formulario de entrega
    </h2>

    <form className="grid place-content-center ">
      <div className="form-control ">
        <label className="label">
          <span className="label-text">Dirección de entrega</span>
        </label>
        <label className="input-group">
          <span>Dirección</span>
          <input
            type="text"
            placeholder="info@site.com"
            className="input input-bordered"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Contacto del receptor</span>
        </label>
        <label className="input-group">
          <span>Contácto</span>
          <input
            type="text"
            placeholder="+53xxxxxxxx"
            className="input input-bordered"
          />
        </label>
      </div>
    </form>
    <div className="w-11/12 mx-auto mt-5 md:w-52  md:flex md:items-center md: justify-start md:absolute md:bottom-32  md:left-28  ">
        <button className="btn btn-primary w-full my-2 md:mr-2">Crear pedido</button>
        <button className="btn w-full mb-2 md:m-0">Cancelar</button>
      </div>
  </div>
  )
}

export default PayForm