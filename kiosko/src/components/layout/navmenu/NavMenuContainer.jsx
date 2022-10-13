import React, { useContext, useEffect } from "react";
import productoContext from "../../../context/productoContext/productoContext";
import authContext from "../../../context/authContext/authContext";

const NavMenuContainer = () => {
  const { establecerAccion } = useContext(productoContext);
  const { autenticado, usuarioAutenticado, cerrarSesion } =
    useContext(authContext);

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  const establecerAccionAux = (accion) => {
    establecerAccion({ accion });
  };

  const admin = false;
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
          {admin === true ? (
            <div>
              <li>
                <label
                  htmlFor="my-modal-6"
                  onClick={() => establecerAccionAux("crearproducto")}
                >
                  Añadir Producto
                </label>
              </li>
              <li>
                <button onClick={cerrarSesion}>Logout</button>
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
            <button onClick={cerrarSesion}>Logout</button>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavMenuContainer;
