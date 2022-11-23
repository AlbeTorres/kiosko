import React from "react";

const PayForm = ({direccion, pago, receptor, movil,onChange,onChecked, onSubmit, cancelar} ) => {
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
            <span className="flex items-center px-2 opacity-100 rounded-l-lg bg-gray-200  ">Dirección</span>
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
            <span className="flex items-center px-2 opacity-100 rounded-l-lg bg-gray-200  ">Nombre</span>
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
            <span className="flex items-center px-2 opacity-100 rounded-l-lg bg-gray-200  ">Contácto</span>
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
              onChange={onChange}
              checked={pago ==='Efectivo' ? true: false}
              type="radio"
              name="pago"
              value={'Efectivo'}
              className="radio checked:bg-red-500 mr-2"
              
            />
            <span className="label-text">Efectivo</span>
          </label>
        </div>
        <div className="form-control mb-5 ">
          <label className="flex items-center cursor-pointer   w-24 ">
            <input
            onChange={onChange}
              type="radio"
              name="pago"
              checked={pago ==='Transferencia' ? true: false}
              value={'Transferencia'}
              className="radio checked:bg-blue-500 mr-2"
              
            />
            <span className="label-text ">Transfermóvil</span>
          </label>
        </div>
        <div className=" mt-5 grid grid-cols-2 place-items-center gap-2   ">
          <button onClick={cancelar} className="btn w-full ">Cancelar</button>
          <button onClick={onSubmit} className="btn btn-primary w-full ">Crear pedido</button>
        </div>
      </form>
    </div>
  );
};

export default PayForm;
