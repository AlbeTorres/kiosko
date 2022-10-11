import React, { useContext } from "react";
import productoContext from "../../../context/productoContext/productoContext";

const NavMenuContainer = () => {
  const { establecerAccion } = useContext(productoContext);

  const establecerAccionAux = (accion) => {
    establecerAccion({ accion });
  };

  const auth = false;
  const admin = false;
  return (
    <ul
      tabIndex={0}
      className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
    >
      {auth === true ? (
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
            <a>Logout</a>
          </li>
        </div>
      ) : (
        <div>
          <li>
            <label
              htmlFor="my-modal-6"
              onClick={() => establecerAccionAux("registro")}
            >
              Registrarse
            </label>
          </li>
          <li>
            <label
              htmlFor="my-modal-6"
              onClick={() => establecerAccionAux("login")}
            >
              Acceder
            </label>
          </li>
        </div>
      )}
    </ul>
  );
};

export default NavMenuContainer;
