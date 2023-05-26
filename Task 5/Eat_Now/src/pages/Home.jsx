import React from "react";
import Nav from "../components/Nav";
import User from "../components/User";
import Search from "../components/Search";
import Options from "../components/Options";
import NewFood from "../components/NewFood";
const Home = () => {
  return (
    <div className="w-full h-[100vh] bg-[#9ADA9E]">
      <div className="mx-4">
        <Nav />
        <User user="Leonard" location="Molyko Buea str 18" />
        </div>
        <section className="w-full bg-[#F0F4FD] pt-6 mt-6 rounded-t-3xl">
          <Search />
          <Options />
          <NewFood />
      </section>     
    </div>
  );
};
export default Home;
