import { faMap } from "@fortawesome/free-regular-svg-icons";
import { faBurger, faDonate, faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Options = () => {
  return (
    <>
      <section className="flex justify-between mx-6 my-4">
        <NavLink to="/nearby">
          <div className="flex flex-col items-center">
            <span className="px-[0.25rem] py-[0.25rem] border bg-white rounded-lg text-[#5DBA63]">
              <FontAwesomeIcon icon={faMap} className="text-xl" />
            </span>
            <small className="text-[0.6rem] my-[0.25rem]">Nearby</small>
          </div>
        </NavLink>
        <div className="flex flex-col items-center">
          <span className="px-[0.25rem] py-[0.25rem] border bg-white rounded-lg text-[#5DBA63]">
            <FontAwesomeIcon icon={faMedal} className="text-xl" />
          </span>
          <small className="text-[0.6rem] my-[0.25rem]">Best Seller</small>
        </div>
        <div className="flex flex-col items-center">
          <span className="px-[0.25rem] py-[0.25rem] border bg-white rounded-lg text-[#5DBA63]">
            <FontAwesomeIcon icon={faBurger} className="text-xl" />
          </span>
          <small className="text-[0.6rem] my-[0.25rem]">All Dishes</small>
        </div>
        <div className="flex flex-col items-center">
          <span className="px-[0.25rem] py-[0.25rem] border bg-white rounded-lg text-[#5DBA63]">
            <FontAwesomeIcon icon={faDonate} className="text-xl" />
          </span>
          <small className="text-[0.6rem] my-[0.25rem]">Donate</small>
        </div>
      </section>
    </>
  );
};

export default Options;
