import React, { useContext } from "react";
import productoContext from "../../../context/productoContext/productoContext";
import authContext from "../../../context/authContext/authContext";
import { FaBars } from "react-icons/fa";

const NavMenuContainerOut = () => {
  const { establecerAccion } = useContext(productoContext);

  const establecerAccionAux = (accion) => {
    establecerAccion({ accion });
  };

  return (
    <div>

    <ul className="md:menu md:menu-horizontal p-0 hidden  ">
                <li className="">
                <label
                    htmlFor="my-modal-6"
                    onClick={() => establecerAccionAux("login")}
                    >
                    Login
                    </label>
                </li>
                <li className="ml-1">
                <label
                    htmlFor="my-modal-6"
                    onClick={() => establecerAccionAux("registro")}
                    >
                    Registrarse
                    </label>
                </li>
            </ul>

    <div className="dropdown dropdown-end md:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="text-xl ">
          <FaBars  />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 h-fit"
      >
        <div className="flex flex-col justify-center  ">
          <li className="my-3 ml-2 w-full">
            <label
            className="w-full"
              htmlFor="my-modal-6"
              onClick={() => establecerAccionAux("login")}
            >
              Login
            </label>
          </li>
          <li className="my-3 ml-2 w-full">
            <label
            className="w-full"
              htmlFor="my-modal-6"
              onClick={() => establecerAccionAux("registro")}
            >
              Registrarse
            </label>
          </li>
        </div>
      </ul>
    </div>
    </div>
  );
};

export default NavMenuContainerOut;
