import React, { useContext, useState, useEffect, useRef } from "react";
import productoContext from "../../../../context/productoContext/productoContext";
import authContext from "../../../../context/authContext/authContext";
import alertaContext from "../../../../context/alertaContext/alertaContext";
import { FaCheckCircle, FaEye } from "react-icons/fa";
import "./auth.css";

const Register = () => {
  let visible = useRef();
  let visible2 = useRef();
  const { establecerAccion } = useContext(productoContext);

  const { autenticado, mensaje, registrarUsuario, eliminarMensaje } =
    useContext(authContext);

  const { alerta, mostrarAlerta } = useContext(alertaContext);

  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }

    if (autenticado || mensaje?.msg === "El usuario ya existe") {
      setLoad(false);
    }
  }, [autenticado, mensaje]);

  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    passwordconf: "",
    isAdmin: false,
    kycimg: "",
    kyc: false,
    advertencia: 1,
    carnet: "",
  });

  const { nombre, email, password, passwordconf, isAdmin } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const see = () => {
    visible.current.type == "password"
      ? (visible.current.type = "text")
      : (visible.current.type = "password");
    visible2.current.type == "password"
      ? (visible2.current.type = "text")
      : (visible2.current.type = "password");
  };

  const establecerAccionAux = (accion) => {
    eliminarMensaje();
    establecerAccion({ accion });
  };

  const eliminarM = () => {
    eliminarMensaje();
    setUsuario({
      nombre: "",
      email: "",
      password: "",
      passwordconf: "",
      isAdmin: false,
      kycimg: "",
      kyc: false,
      advertencia: 1,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //validar campos vacios
    if (
      nombre.trim === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      passwordconf.trim() === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios", "error");
      return;
    }

    //validar contraseñas iguales
    if (password !== passwordconf) {
      mostrarAlerta("La contraseñas no coinciden", "error");
      return;
    }

    if (password.length < 8) {
      mostrarAlerta("La contraseña debe contener más 8 caracteres", "error");
      return;
    }
    eliminarMensaje();
    registrarUsuario({
      nombre,
      email,
      password,
      isAdmin: email === "albertocorreoficial@gmail.com",
      advertencia: 1,
      kycimg: "",
      kyc: false,
      carnet: "",
    });
    setLoad(true);

    setUsuario({
      nombre: "",
      email: "",
      password: "",
      passwordconf: "",
      isAdmin: false,
    });
  };

  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      {alerta && (
        <div className={`bg-red-600 text-center p-2 text-white`}>
          {alerta.msg}{" "}
        </div>
      )}

      {load ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 ">
          <div className="lds-dual-ring"></div>
        </div>
      ) : autenticado ? (
        <div className="card-body">
          <div className="flex items-center text-xl text-center justify-center">
            <FaCheckCircle className="text-green-600" />
            <h2 className="ml-2">Usuario autenticado</h2>
          </div>
          <label htmlFor="my-modal-6" className="btn">
            Cancelar
          </label>
        </div>
      ) : (
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Nombre</span>
            </label>
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              value={nombre}
              onChange={onChange}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              name="email"
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
              ref={visible}
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={onChange}
              className="input input-bordered "
            />

            <label className="label">
              <span className="label-text">Repeat Password</span>
            </label>
            <input
              type="password"
              ref={visible2}
              placeholder="password"
              name="passwordconf"
              value={passwordconf}
              onChange={onChange}
              className="input input-bordered"
            />
            <div className=" w-full flex items-center justify-between">
              <label
                className=" label label-text-alt link link-hover"
                htmlFor="my-modal-6"
                onClick={() => establecerAccionAux("login")}
              >
                Ya tienes una cuenta?
              </label>
              <label
                onClick={see}
                className=" label label-text-alt link link-hover "
              >
                Ver contraseña
              </label>
            </div>
          </div>
          <div className="form-control mt-6">
            <button onClick={onSubmit} className="btn btn-primary">
              Registrar
            </button>
          </div>
          <div className="form-control mt-1">
            <label htmlFor="my-modal-6" onClick={eliminarM} className="btn">
              Cancelar
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
