import React, { useContext, useEffect } from "react";
import {Link} from 'react-router-dom';
import productoContext from "../../../context/productoContext/productoContext";
import authContext from "../../../context/authContext/authContext";
import noimg from '../../../assets/noimg1.jpg'

const NavMenuContainer = () => {
  const { establecerAccion } = useContext(productoContext);
  const { usuario, cerrarSesion } =
    useContext(authContext);



  const establecerAccionAux = (accion) => {
    establecerAccion({ accion });
  };

  
  
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <figure className="w-10 h-10 rounded-full">
          <img src={usuario?.perfilimg ? usuario.perfilimg: noimg} className='h-full w-full object-cover rounded-full' />
        </figure>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
      >
        <div className="h-fit" >
          <li className="my-3 ml-2">
            <Link to={'/perfil'} >Perfil</Link>
          </li>
          {usuario?.isAdmin ? (
            <div>
              <li className="my-3 ml-2">
                <label
                  htmlFor="my-modal-6"
                  onClick={() => establecerAccionAux("crearproducto")}
                >
                  Añadir Producto
                </label>
              </li>
            </div>
          ) : (
            null
          )}

          <li className="my-3 ml-2">
            <button onClick={cerrarSesion}>Cerrar Sesión</button>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavMenuContainer;
