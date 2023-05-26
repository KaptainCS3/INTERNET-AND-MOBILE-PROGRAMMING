import React from "react";
import { NavLink } from "react-router-dom";
const OnBoardingNavBtn = () => {
  return (
    <div className="flex justify-between mx-8">
      <NavLink to="/login" className="px-2 py-4 uppercase text-[#828282]">skip</NavLink>
      <NavLink to="/login" className="px-2 py-4 rounded-full uppercase text-white font-medium bg-[#9ADA9E]">
        next
      </NavLink>
    </div>
  );
};

export default OnBoardingNavBtn;
