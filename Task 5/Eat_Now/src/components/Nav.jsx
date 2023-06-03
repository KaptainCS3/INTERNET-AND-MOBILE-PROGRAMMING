import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBell,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="fixed w-full bottom-4 left-0 right-0 z-10">
      <section className="mx-4 border bg-white shadow-xl border-[#5DBA63] flex justify-between items-center py-2 px-4 rounded-2xl">
        <NavLink to="/home">
          <div className="flex flex-col cursor-pointer">
            <FontAwesomeIcon icon={faHouse} className="text-[#5DBA63]" />
            <span>Home</span>
          </div>
        </NavLink>
        <NavLink to="/notifications">
          <div className="flex flex-col cursor-pointer">
            <FontAwesomeIcon icon={faBell} className="text-[#5DBA63] " />
            <span>Notification</span>
          </div>
        </NavLink>
        <div className="flex flex-col cursor-pointer">
          <FontAwesomeIcon icon={faShoppingCart} className="text-[#5DBA63] " />
          <span>Cart</span>
        </div>
        <NavLink to="/profile">
          <div className="flex flex-col cursor-pointer">
            <FontAwesomeIcon icon={faUser} className="text-[#5DBA63] " />
            <span>Profile</span>
          </div>
        </NavLink>
      </section>
    </nav>
  );
};

export default Nav;
