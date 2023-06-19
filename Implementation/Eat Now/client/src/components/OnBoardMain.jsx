import React from "react";
import OnBoardingNavBtn from "./OnBoardingNavBtn";

const OnBoardMain = ({ img, title, desc }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="animate-pulse flex items-center justify-center">
        <img src={img} alt="" className="max-w-full h-full" />
      </div>
      <div className="text-center">
        <h3 className="text-md font-bold py-4">{title}</h3>
        <p className="text-sm px-4">{desc}</p>
      </div>
      <div className="absolute bottom-0 mb-4 w-full">
        <OnBoardingNavBtn />
      </div>
    </div>
  );
};

export default OnBoardMain;
