import React from "react";
import tarjeta from "../../../assets/tarjeta.jpg";
import cup from "../../../assets/cup.jpg";

const Paymen = () => {
  return (
    <div >
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Entrega</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 ">
            <li>
              <a>Mapa</a>
            </li>
          </ul>
        </div>
      </div>
      <div  className="md:grid md:grid-cols-2 ">

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
      </div>
      <div className="md:w-2/3 md:mx-auto">
        <h2 className="text-center text-xl font-semibold my-5 ">
          Métodos de pago
        </h2>
        <div className="grid  place-items-center gap-y-4 ">
          <div className="card w-11/12 bg-base-100 shadow-xl image-full">
            <figure className="h-52 ">
              <img src={tarjeta} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Transferencia</h2>
              <p>Pague desde la comodidad de su móvil y priorice su pedido</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Pagar</button>
              </div>
            </div>
          </div>
          <div className="card w-11/12 bg-base-100 shadow-xl image-full">
            <figure className="h-52 ">
              <img src={cup} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Efectivo</h2>
              <p>Pague en efectivo en cuanto reciba su pedido</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Pagar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="w-11/12 mx-auto mt-5 md:w-52  md:flex md:items-center md: justify-start md:absolute md:bottom-32  md:left-28  ">
        <button className="btn btn-primary w-full my-2 md:mr-2">Crear pedido</button>
        <button className="btn w-full mb-2 md:m-0">Cancelar</button>
      </div>
    </div>
  );
};

export default Paymen;
