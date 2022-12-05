import React, {useContext, useEffect, useState, useRef} from "react";
import authContext from "../../../../context/authContext/authContext";
import alertaContext from "../../../../context/alertaContext/alertaContext";
import {FaCheckCircle} from 'react-icons/fa';
import './auth.css'


const Login = () => {

  const {autenticado,mensaje, iniciarSesion, usuarioAutenticado, eliminarMensaje}= useContext(authContext);
  const {alerta, mostrarAlerta}= useContext(alertaContext);


  let visible = useRef()

  const see=()=>{

    visible.current.type=='password' ? visible.current.type='text': visible.current.type='password'
  }
  const [load, setLoad]=useState(false)

  useEffect(()=>{
  
      if(mensaje){
        mostrarAlerta(mensaje.msg, mensaje.categoria);
      }

      if(autenticado || mensaje?.msg==='No existe un usuario registrado con ese email' || mensaje?.msg==='La contraseña no es correcta'){
        setLoad(false)
      }
      
  },[autenticado,mensaje])

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

  const eliminarM=()=>{
    eliminarMensaje()
    setUsuario({
      email:'',
      password:''
    })
  }

  const onSubmit=()=>{

     //validar campos
     if(email.trim() ==='' || password.trim() ==='' ){

      mostrarAlerta('Todos los campos son obligatorios', 'error')
      return;
  }

  if(password.length<8){
      mostrarAlerta('La contraseña debe contener más 8 caracteres', 'error')
      return;
  }

    eliminarMensaje();
    iniciarSesion(usuario)
    setLoad(true)

    setUsuario({
      email:'',
      password:''
    })
  }

  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

    {alerta && <div className={`bg-red-600 text-center p-2 text-white`}>{alerta.msg} </div>}

    {load ? <div className="w-full h-full flex items-center justify-center bg-gray-200 ">
              <div className="lds-dual-ring"></div>
            </div>
    
    
    : autenticado ?
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
            type="password"
            ref={visible}
            name='password'
            value={password}
            onChange={onChange}
            placeholder="password"
            className="input input-bordered"
          />
          <div className="w-full flex items-center justify-between">
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
          <label onClick={see} className=" label label-text-alt link link-hover ">
              Ver contraseña
              </label>

          </div>

        </div>
        <div className="form-control mt-6">
          <button onClick={onSubmit} className="btn btn-primary">Login</button>
        </div>
        <div className="form-control mt-1">
        <label htmlFor="my-modal-6" onClick={eliminarM} className="btn">
            Cancelar
          </label>
        </div>
      </div>
    }
    </div>
  );
};

export default Login;
