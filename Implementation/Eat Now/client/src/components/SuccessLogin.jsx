import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const SuccessLogin = () => {
  return (
    <section className="w-full absolute min-h-100vh mt-[15rem] top-0">
      <div className="mx-8 bg-white py-16 rounded-2xl flex flex-col items-center">
        <div className="text-[#9ADA9E] text-[4rem]">
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <h1 className="hero">Successfully Login</h1>
      </div>
    </section>
  );
};

export default SuccessLogin;
