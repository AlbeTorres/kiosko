import React, { useContext, useEffect } from "react";
import productoContext from "../../../context/productoContext/productoContext";
import authContext from "../../../context/authContext/authContext";

const NavMenuContainer = () => {
  const { establecerAccion } = useContext(productoContext);
  const { usuario, cerrarSesion } =
    useContext(authContext);

  useEffect(() => {
  }, []);

  const establecerAccionAux = (accion) => {
    establecerAccion({ accion });
  };

  
  
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
      >
        <div>
          <li>
            <button >Perfil</button>
          </li>
          {usuario?.isAdmin ? (
            <div>
              <li>
                <label
                  htmlFor="my-modal-6"
                  onClick={() => establecerAccionAux("crearproducto")}
                >
                  Añadir Producto
                </label>
              </li>
            </div>
          ) : (
            <li>
              <label
                htmlFor="my-modal-6"
                onClick={() => establecerAccionAux("carro")}
              >
                Carrito
                <div className="badge">+99</div>
              </label>
            </li>
          )}

          <li>
            <button onClick={cerrarSesion}>Cerrar Sesión</button>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavMenuContainer;
