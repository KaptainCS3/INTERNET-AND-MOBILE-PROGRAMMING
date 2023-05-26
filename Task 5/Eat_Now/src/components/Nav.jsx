import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBell, faUser } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav className="fixed w-full bottom-4 left-0 right-0 z-10">
      <section className="mx-4 border border-[#5DBA63] flex justify-between items-center py-2 px-4 rounded-2xl">
        <div className="flex flex-col">
          <FontAwesomeIcon icon={faHouse} />
          <span>Home</span>
        </div>
        <div className="flex flex-col">
          <FontAwesomeIcon icon={faBell} />
          <span>Notification</span>
        </div>
        <div className="flex flex-col">
          {/* <FontAwesomeIcon icon={faCart} /> */}
          <span>Cart</span>
        </div>
        <div className="flex flex-col">
          <FontAwesomeIcon icon={faUser} />
          <span>Profile</span>
        </div>
      </section>
    </nav>
  );
};

export default Nav;
