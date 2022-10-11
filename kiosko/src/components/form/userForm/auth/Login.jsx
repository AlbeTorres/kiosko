import React, {useContext, useEffect, useState} from "react";
import authContext from "../../../../context/authContext/authContext";


const Login = () => {

  const {autenticado, iniciarSesion, usuarioAutenticado}= useContext(authContext);

  useEffect(()=>{
    usuarioAutenticado()
  },[autenticado])

  const [usuario, setUsuario]= useState({
    email:'',
    password:''
  })

  const {email, password}= usuario;

  const onChange=e=>{
    setUsuario({
      ...usuario,
      [e.target.name]:e.target.value
    })
  }

  const onSubmit=()=>{
    iniciarSesion(usuario)
  }

  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

    { autenticado ?
    <div>

     <h2>usuario autenticado</h2>
     <label htmlFor="my-modal-6" className="btn">
            Cancelar
          </label>
    </div>:
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            name='email'
            value={email}
            onChange={onChange}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            name='password'
            value={password}
            onChange={onChange}
            placeholder="password"
            className="input input-bordered"
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={onSubmit} className="btn btn-primary">Login</button>
        </div>
        <div className="form-control mt-1">
        <label htmlFor="my-modal-6" className="btn">
            Cancelar
          </label>
        </div>
      </div>
    }
    </div>
  );
};

export default Login;
