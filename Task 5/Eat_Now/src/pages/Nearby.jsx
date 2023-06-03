import React from "react";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import HeadText from "../components/HeadText";
import NearbyPoint from "../components/NearbyPoint";

const Nearby = () => {
  return (
    <section className="w-full h-[100vh] bg-[#5DBA63]">
      <div className="">
        <div className="pt-4">
          <Link to="/home" className="w-1">
            <HeadText logValue="" route="/home" />
          </Link>
        </div>
        <div className="w-full -mt-9 pl-5">
          <Search />
        </div>
        <section className="w-full min-h-[100vh] bg-[#F0F4FD] pt-6 mt-6 rounded-t-3xl pb-10 px-4">
          <h1 className="hero">Nearby Restaurants</h1>
          <small className="text-[#aaa] ">50+ Restaurants found near you</small>
          <NearbyPoint />
        </section>
      </div>
    </section>
  );
};

export default Nearby;
