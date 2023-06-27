import Reac, { useContext } from "react";
import img2 from "../../assets/1.jpg";
import {
  FaEnvelope,
  FaMapMarkedAlt,
  FaMapSigns,
  FaPhoneAlt,
  FaUserLock,
} from "react-icons/fa";
import productoContext from "../../context/productoContext/productoContext";
import { Link } from "react-router-dom";

const PerfilDatos = ({ usuario }) => {
  const { establecerAccion } = useContext(productoContext);

  const establecerAccionAux = (accion) => {
    establecerAccion({ accion });
  };

  const { email, movil, kycimg, kyc, carnet } = usuario;

  return (
    <div className="grid mt-20  w-11/12 md:grid-cols-2 md:gap-x-8  md:h-full  place-items-start mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8 ">
      <div className="md:w-full w-full">
        <div className="border-b w-full my-4     ">
          <div className="flex items-center ">
            <FaEnvelope />
            <p className="ml-1">Correo</p>
          </div>
          <p className="ml-5">{email}</p>
        </div>
        <div className="border-b w-full my-4     ">
          <div className="flex items-center ">
            <FaPhoneAlt />
            <p className="ml-1">Móvil</p>
          </div>
          <p className="ml-5">{movil}</p>
        </div>
        <div className="border-b w-full my-4     ">
          <div className="flex items-center ">
            <FaPhoneAlt />
            <p className="ml-1">Carnet</p>
          </div>
          <p className="ml-5">{carnet}</p>
        </div>
        <div className="border-b w-full my-4     ">
          <div className="flex items-center ">
            <FaMapMarkedAlt />
            <p className="ml-1">Provincia</p>
          </div>
          <p className="ml-5">Artemisa</p>
        </div>
        <div className="border-b w-full my-4     ">
          <div className="flex items-center ">
            <FaMapSigns />
            <p className="ml-1">Municipio</p>
          </div>
          <p className="ml-5">Artemisa</p>
        </div>
      </div>
      {/* {kyc ? 
    <div className=' w-full my-4'>
      <div className="flex items-center ">
        <FaUserLock />
        <p className="ml-1">Kyc</p>
      </div>
      <figure className="w-3/4 h-80  mx-auto rounded-md shadow-md">
      <img className="w-full h-full object-cover rounded-md" src={kycimg} alt="" />

      </figure>
    </div>:
    <div className='w-full my-4'>
    <label htmlFor="my-modal-6" className='btn btn-primary' 
            onClick={() => establecerAccionAux("crearkyc")}>Hacer Kyc</label>
        
    </div>
    } */}
    <div className="w-full md:mt-10">
      <label
        className="btn w-full md:w-fit"
        htmlFor="my-modal-6"
        onClick={() => establecerAccionAux("editarperfil")}
      >
        Editar
      </label>
      <Link to={'/'} className="md:ml-4 mt-5 md:mt-0 btn btn-secondary    w-full md:w-fit">Volver</Link>

    </div>
    </div>
  );
};

export default PerfilDatos;
