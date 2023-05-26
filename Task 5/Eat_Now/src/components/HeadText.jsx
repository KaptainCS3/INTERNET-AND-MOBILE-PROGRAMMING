import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const HeadText = ({ logValue, route }) => {
  return (
    <div className="text-white mx-4 pt-8 flex items-center">
      <Link to={route}>
      <FontAwesomeIcon icon={faAngleLeft} className="text-xl pt-[0.4rem] cursor-pointer"/>
      </Link>
      <span className="pl-3 text-xl">{logValue}</span>
    </div>
  );
};

export default HeadText;
