import React, {useContext, useEffect} from "react";
import NavMenuContainer from "./navmenu/NavMenuContainer";
import { FaShoppingCart } from "react-icons/fa";
import NavCarrito from "./navmenu/NavCarrito";

const Navbar = () => {
  const autenticado = true;
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <FaShoppingCart className="text-xl" />
        <a className="normal-case text-xl ml-1 "> Kiosquito</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control absolute top-20 right-20 md:relative md:top-0 md:right-0  ">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>

        <NavCarrito />

        {autenticado ? (
          <NavMenuContainer />
        ) : (
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
