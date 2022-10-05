import React from "react";

const ModificarProducto = () => {
  return (
    <div className="modal-box">

      <div className="form-control w-full max-w-xs">

        <label className="label">
          <span className="label-text">What is your name?</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">What is your name?</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">What is your name?</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      <div className="modal-action">
        <label
          htmlFor="my-modal-6"
          onClick={() => eliminarProducto()}
          className="btn btn-secondary "
        >
          Eliminar
        </label>
        <label htmlFor="my-modal-6" className="btn">
          Cancelar
        </label>
      </div>
    </div>
  );
};

export default ModificarProducto;
