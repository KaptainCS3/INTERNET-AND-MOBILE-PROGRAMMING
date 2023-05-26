import { faMap } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Options = () => {
  return (
    <>
      <section className="flex justify-between mx-6 my-4">
        <div className="flex flex-col items-center">
          <span className="px-[0.25rem] border bg-white rounded-lg text-[#5DBA63]">
            <FontAwesomeIcon icon={faMap} />
          </span>
          <small className="text-[0.6rem] my-[0.25rem]">Nearby</small>
        </div>
        <div className="flex flex-col items-center">
          <span className="px-[0.25rem] border bg-white rounded-lg text-[#5DBA63]">
            <FontAwesomeIcon icon={faMap} />
          </span>
          <small className="text-[0.6rem] my-[0.25rem]">Best Seller</small>
        </div>
        <div className="flex flex-col items-center">
          <span className="px-[0.25rem] border bg-white rounded-lg text-[#5DBA63]">
            <FontAwesomeIcon icon={faMap} />
          </span>
          <small className="text-[0.6rem] my-[0.25rem]">All Dishes</small>
        </div>
        <div className="flex flex-col items-center">
          <span className="px-[0.25rem] border bg-white rounded-lg text-[#5DBA63]">
            <FontAwesomeIcon icon={faMap} />
          </span>
          <small className="text-[0.6rem] my-[0.25rem]">Donate</small>
        </div>
      </section>
    </>
  );
};

export default Options;
