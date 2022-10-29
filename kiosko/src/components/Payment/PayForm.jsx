import React from "react";

const PayForm = ({productos,direccion, pago, receptor, movil, valor,onChange} ) => {
  return (
    <div className="">
      <h2 className="text-center text-xl font-semibold my-5 ">
        Formulario de entrega
      </h2>

      <form className="grid place-items-center mt-10 ">
        <div className="form-control  ">
          <label className="label">
            <span className="label-text">Dirección de entrega</span>
          </label>
          <label className="input-group">
            <span>Dirección</span>
            <input
              type="text"
              name='direccion'
              value={direccion}
              onChange={onChange}
              placeholder="info@site.com"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Nombre del receptor</span>
          </label>
          <label className="input-group">
            <span>Nombre</span>
            <input
              type="text"
              name='receptor'
              value={receptor}
              onChange={onChange}
              placeholder="Nombre"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text">Contacto del receptor</span>
          </label>
          <label className="input-group">
            <span>Contácto</span>
            <input
              name="movil"
              value={movil}
              onChange={onChange}
              type="text"
              placeholder="+53xxxxxxxx"
              className="input input-bordered"
            />
          </label>
        </div>
        <h2 className="text-center text-xl font-semibold  ">
        Método de pago
      </h2>
        <div className="form-control my-5">
          <label className=" flex items-center cursor-pointer   w-24 ">
            <input
            onChange={''}
              type="radio"
              name="radio-6"
              className="radio checked:bg-red-500 mr-2"
              checked
            />
            <span className="label-text">Efectivo</span>
          </label>
        </div>
        <div className="form-control mb-5 ">
          <label className="flex items-center cursor-pointer   w-24 ">
            <input
            onChange={''}
              type="radio"
              name="radio-6"
              className="radio checked:bg-blue-500 mr-2"
              checked
            />
            <span className="label-text ">Transfermóvil</span>
          </label>
        </div>
        <div className=" mt-5 grid grid-cols-2 place-items-center gap-2   ">
          <button className="btn w-full ">Cancelar</button>
          <button className="btn btn-primary w-full ">Crear pedido</button>
        </div>
      </form>
    </div>
  );
};

export default PayForm;
