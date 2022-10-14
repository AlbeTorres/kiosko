import React, { useContext, useState, useEffect } from "react";
import productoContext from "../../../../context/productoContext/productoContext";
import authContext from '../../../../context/authContext/authContext';
import alertaContext from '../../../../context/alertaContext/alertaContext';
import {FaCheckCircle} from 'react-icons/fa';

const Register = () => {

  const { establecerAccion } = useContext(productoContext);

  const { autenticado ,mensaje ,registrarUsuario,  eliminarMensaje }= useContext(authContext);

  const { alerta, mostrarAlerta} = useContext(alertaContext);

  useEffect(()=>{

    if(mensaje){
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }

  },[mensaje]);

  const [usuario, setUsuario]= useState({
    email:'',
    password:'',
    passwordconf:'',

  })

  const {email, password, passwordconf}= usuario;

  const onChange=e=>{
    setUsuario({
      ...usuario,
      [e.target.name]:e.target.value
    })
  }

  const establecerAccionAux = (accion) => {
    eliminarMensaje()
    establecerAccion({ accion });
  };

  const eliminarM=()=>{
    eliminarMensaje()
  }

  const onSubmit= e=>{
    e.preventDefault();

    console.log('registrar')

     //validar campos vacios
     if(email.trim() ==='' || password.trim() ===''|| passwordconf.trim()==='' ){
        
         mostrarAlerta('Todos los campos son obligatorios', 'error')
         return;
     }
    
     //validar contraseñas iguales
     if(password!==passwordconf){
        mostrarAlerta('La contraseñas no coinciden', 'error')
        return;

     }

     

    if(password.length<8){
        mostrarAlerta('La contraseña debe contener más 8 caracteres', 'error')
        return;
    }
    eliminarMensaje()
  registrarUsuario({email,password})
}


  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    {alerta && <div className={`bg-red-600 text-center p-2 text-white`}>{alerta.msg} </div>}

    { autenticado ?
    <div className="card-body" >
    <div className="flex items-center text-xl text-center justify-center">
        <FaCheckCircle className="text-green-600"/>
        <h2 className="ml-2">Usuario autenticado</h2>
    </div>
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
            placeholder="password"
            name='password'
            value={password}
            onChange={onChange}
            className="input input-bordered"
          />
          <label className="label">
            <span className="label-text">Repeat Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            name='passwordconf'
            value={passwordconf}
            onChange={onChange}
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
          <button onClick={onSubmit} className="btn btn-primary">Registrar</button>
        </div>
        <div className="form-control mt-1">
          <label htmlFor="my-modal-6" onClick={eliminarM } className="btn">
            Cancelar
          </label>
        </div>
      </div>}
    </div>
  );
};

export default Register;
