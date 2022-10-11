import React, { useContext, useState } from "react";
import productoContext from "../../../../context/productoContext/productoContext";
import authContext from '../../../../context/authContext/authContext'

const Register = () => {

  const { establecerAccion } = useContext(productoContext);

  const { registrarUsuario}= useContext(authContext)

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
    establecerAccion({ accion });
  };

  const onSubmit= e=>{
    e.preventDefault();

    console.log('registrar')

     //validar campos vacios
     if(email.trim() ==='' || password.trim() ===''|| passwordconf.trim()==='' ){
        
        //  mostrarAlerta('Todos los campos son obligatorios', 'error')
         return;
     }
    
     //validar contraseñas iguales
     if(password!==passwordconf){
        //  mostrarAlerta('La contraseñas no coinciden', 'error')
         return;

     }

     

    if(password.length<8){
        // mostrarAlerta('La contraseña debe contener más 8 caracteres', 'error')
        return;
    }

  registrarUsuario({email,password})
}


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
          <label htmlFor="my-modal-6" className="btn">
            Cancelar
          </label>
        </div>
      </div>
    </div>
  );
};

export default Register;
