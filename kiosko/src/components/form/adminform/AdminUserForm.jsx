import React from 'react'

const AdminUserForm = ({nombre,email,movil,carnet, kyc, advertencias, rol, img}) => {


    const onChange=()=>{

    }

    const onSubmit=()=>{

    }
  return (
    <div className='modal-box md:flex'>

        <figure>
            <img src={img} alt="" />
        </figure>

        <p>{kyc}</p>
        <p>{advertencias}</p>
      <form className="form-control mx-auto w-full max-w-xs">

      <div>
          <label className="label">
            <span className="label-text">Nombre</span>
          </label>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={onChange}
            placeholder="Escribe aquí"
            className="input input-bordered w-full max-w-xs"
          />

      </div>
      <div>
          <label className="label">
            <span className="label-text">Rol</span>
          </label>
          <input
            type="text"
            name="rol"
            value={rol}
            onChange={onChange}
            placeholder="Escribe aquí"
            className="input input-bordered w-full max-w-xs"
          />

      </div>
      <div>
          <label className="label">
            <span className="label-text">Carnet</span>
          </label>
          <input
            type="text"
            name="carnet"
            value={carnet}
            onChange={onChange}
            placeholder="Escribe aquí"
            className="input input-bordered w-full max-w-xs"
          />

      </div>
      <div>
          <label className="label">
            <span className="label-text">Correo</span>
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Escribe aquí"
            className="input input-bordered w-full max-w-xs"
          />

      </div>
      <div>
          <label className="label">
            <span className="label-text">Movil</span>
          </label>
          <input
            type="text"
            name="movil"
            value={movil}
            onChange={onChange}
            placeholder="Escribe aquí"
            className="input input-bordered w-full max-w-xs"
          />
      </div>
      <div className="modal-action">
          <label
            htmlFor="my-modal-6"
            onClick={() => onSubmit()}
            className="btn btn-primary "
          >
            Aceptar
          </label>
          <label htmlFor="my-modal-6" className="btn">
            Cancelar
          </label>
        </div>
      
          
          </form>
    </div>
  )
}

export default AdminUserForm