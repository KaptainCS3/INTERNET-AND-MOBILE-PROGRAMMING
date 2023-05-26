import React from "react";

const OnBoard = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center flex-col items-center bg-[#9ADA9E]">
      <div className="w-[14rem] h-[14rem] animate-pulse">
        <img
          src="/assets/2.png"
          alt=""
          className="rounded-full h-full max-w-full"
        />
      </div>
      <h1 className="hero my-4 text-white">Eat Now</h1>
    </div>
  );
};

export default OnBoard;
