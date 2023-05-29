import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faShareAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import nearby from "../../nearby";
const NearbyPoint = () => {
  const NearBy = nearby.map((el) => {
    return (
      <div className="mt-4 flex border-b pb-4" key={el.id}>
        <div className="w-1/4">
          <img
            src={el.img}
            className="w-[6rem] h-[6rem] object-cover rounded-2xl"
            alt=""
          />
        </div>
        <div className="flex justify-between w-3/4">
          <div className="text-sm flex flex-col justify-between ml-4">
            <h3 className="font-bold">{el.title}</h3>
            <p>{el.type}</p>
            <div className="flex items-center">
              <span>
                <span>
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="pr-2 text-[#2D9CDB]"
                  />
                </span>
                <span>{el.distance}</span>
              </span>
              <span>
                <span className="w-[0.25rem] h-[0.25rem] rounded-full bg-[#999] mx-2 inline-block"></span>
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-yellow-400 pr-2"
                  />
                </span>
                <span>4.8</span>
              </span>
            </div>
            <p>Up to {el.discount} discount</p>
          </div>
          <span>
            <FontAwesomeIcon
              icon={faShareAlt}
              className="text-[#5DBA63] text-xl"
            />
          </span>
        </div>
      </div>
    );
  });
  return <div>{NearBy}</div>;
};

export default NearbyPoint;
