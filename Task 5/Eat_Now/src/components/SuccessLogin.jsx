import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const SuccessLogin = () => {
  return (
    <div className="">
      <div>
        <FontAwesomeIcon icon={faCheck} />
      </div>
      <h1>Successfully Login</h1>
    </div>
  );
};

export default SuccessLogin;
