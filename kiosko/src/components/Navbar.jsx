import React from "react";
import NavMenuContainer from "./navmenu/NavMenuContainer";
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
      <FaShoppingCart className="text-xl"/>
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
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <NavMenuContainer/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
