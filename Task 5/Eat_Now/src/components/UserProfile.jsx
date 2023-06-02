import React from "react";
import { NavLink } from "react-router-dom";
import HeadText from "./HeadText";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBell,
  faBookBookmark,
  faContactBook,
  faGear,
  faUser,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
const UserProfile = () => {
  return (
    <div className="w-full h-[100vh] bg-[#5DBA63]">
      <div className="">
        <NavLink to="/home">
          <HeadText logValue="Profile" route="/home" />
        </NavLink>
        <Nav />
      </div>
      <section className="bg-[#F0F4FD] pt-8 pb-32 mt-16 px-4 rounded-t-3xl min-h-[100vh]">
        <div className="flex pb-4">
          <div className="w-16 h-16">
            <img
              src="/assets/user_avarta.jpg"
              alt="user profile"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold pb-[0.3rem]">
              Leonard Appelgryn
            </h1>
            <h3 className="text-[0.9rem]">Stayuptodate237@gmail.com</h3>
          </div>
        </div>
        <div className="border-t-2 border-[#5DBA63] pt-3">
          <h2 className="font-bold">My Account</h2>
          <div className="flex justify-between mt-4 text-[#5DBA63] cursor-pointer">
            <p>
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="pl-4 text-black">Manage Profile</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faAngleRight} />
            </p>
          </div>
          <div className="flex justify-between mt-4 text-[#5DBA63] cursor-pointer">
            <p>
              <span>
                <FontAwesomeIcon icon={faWallet} />
              </span>
              <span className="pl-4 text-black">Payment</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faAngleRight} />
            </p>
          </div>
          <div className="flex justify-between mt-4 text-[#5DBA63] cursor-pointer">
            <p>
              <span>
                <FontAwesomeIcon icon={faBookBookmark} />
              </span>
              <span className="pl-4 text-black">Saved</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faAngleRight} />
            </p>
          </div>
          <div className="flex justify-between mt-4 text-[#5DBA63] cursor-pointer">
            <p>
              <span>
                <FontAwesomeIcon icon={faContactBook} />
              </span>
              <span className="pl-4 text-black">Join as Seller</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faAngleRight} />
            </p>
          </div>
          <div className="flex justify-between mt-4 text-[#5DBA63] cursor-pointer">
            <p>
              <span>
                <FontAwesomeIcon icon={faBell} />
              </span>
              <span className="pl-4 text-black">Notification</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faAngleRight} />
            </p>
          </div>
          <div className="flex justify-between mt-4 text-[#5DBA63] cursor-pointer">
            <p>
              <span>
                <FontAwesomeIcon icon={faGear} />
              </span>
              <span className="pl-4 text-black">Setting</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faAngleRight} />
            </p>
          </div>
          <div className="flex justify-between mt-4 text-[#5DBA63] cursor-pointer">
            <p>
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="pl-4 text-black">Log Out</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faAngleRight} />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
