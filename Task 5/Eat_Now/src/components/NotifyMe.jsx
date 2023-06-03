import React from "react";
import { NavLink } from "react-router-dom";
import HeadText from "./HeadText";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faXmark } from "@fortawesome/free-solid-svg-icons";
const NotifyMe = () => {
  return (
    <section className="w-full h-[100vh] bg-[#5DBA63]">
      <Nav />
      <NavLink to="/home">
        <HeadText logValue="Notification" route="/home" />
      </NavLink>
      <div className="bg-[#F0F4FD] pt-8 pb-32 mt-16 px-4 rounded-t-3xl min-h-[100vh]">
        <div className="flex justify-end text-[#2D9CDB] mb-4">
          <button>Delete All</button>
        </div>
        <div className="flex mt-3 border-b pb-4 items-center">
          <div className="w-1/4">
            <div className="w-10 h-10 border flex items-center justify-center rounded-xl bg-[#5DBA63] text-white">
              <FontAwesomeIcon icon={faComment} className="text-xl" />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="text-sm">
              <h3 className="font-bold">Up to 50k discount for food</h3>
              <p className="text-[0.7rem]">
                Ask our driver to find the food you want
              </p>
            </div>
            <div className="text-red-400 cursor-pointer">
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
        </div>
        <div className="flex mt-3 border-b pb-4 items-center">
          <div className="w-1/4">
            <div className="w-10 h-10 border flex items-center justify-center rounded-xl bg-[#5DBA63] text-white">
              <FontAwesomeIcon icon={faComment} className="text-xl" />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="text-sm">
              <h3 className="font-bold">Up to 50k discount for food</h3>
              <p className="text-[0.7rem]">
                Ask our driver to find the food you want
              </p>
            </div>
            <div className="text-red-400 cursor-pointer">
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
        </div>
        <div className="flex mt-3 border-b pb-4 items-center">
          <div className="w-1/4">
            <div className="w-10 h-10 border flex items-center justify-center rounded-xl bg-[#5DBA63] text-white">
              <FontAwesomeIcon icon={faComment} className="text-xl" />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="text-sm">
              <h3 className="font-bold">Up to 50k discount for food</h3>
              <p className="text-[0.7rem]">
                Ask our driver to find the food you want
              </p>
            </div>
            <div className="text-red-400 cursor-pointer">
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotifyMe;
