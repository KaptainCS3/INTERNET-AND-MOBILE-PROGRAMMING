import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const User = ({ user, location }) => {
  return (
    <>
      <section className="text-white pt-8">
        <h1 className="hero">Hi, {user}</h1>
        <span className="">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span className="pl-2">{location}</span>
        </span>
      </section>
    </>
  );
};

export default User;
