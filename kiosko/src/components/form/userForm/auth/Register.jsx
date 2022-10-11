import React, { useContext } from "react";
import productoContext from "../../../../context/productoContext/productoContext";

const Register = () => {
  const { establecerAccion } = useContext(productoContext);

  const establecerAccionAux = (accion) => {
    establecerAccion({ accion });
  };

  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            className="input input-bordered"
          />
          <label className="label">
            <span className="label-text">Repeat Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            className="input input-bordered"
          />
          <label
            className=" label label-text-alt link link-hover"
            htmlFor="my-modal-6"
            onClick={() => establecerAccionAux("login")}
          >
            Ya tienes una cuenta?
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registrar</button>
        </div>
        <div className="form-control mt-1">
          <label htmlFor="my-modal-6" className="btn">
            Cancelar
          </label>
        </div>
      </div>
    </div>
  );
};

export default Register;
