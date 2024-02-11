import React, { useState, useContext } from "react";
import Nav from "../components/Nav";
import User from "./User";
import Search from "../components/Search";
import Options from "../components/Options";
import NewFood from "../components/NewFood";
import Carousel from "../components/Carousel";
import BtnAddItems from "../components/BtnAddItems";
import UploadFood from "../components/UploadFood";
import AddStock from "../components/AddStock";
import { UserContext } from "../hooks/UserContext";
const DashBoard = () => {
  const {user, setUser} = useContext(UserContext);
  const [isShown, setIsShown] = useState(false);
  const showAdd = () => {
    setIsShown(!isShown);
  };

  console.log(user);
  return (
    <div className="w-full h-[100vh] bg-[#9ADA9E]">
      <div className="mx-4">
        <Nav />
        <User user={user.name} location={user.location} />
      </div>
      <section className="w-full bg-[#F0F4FD] pt-6 mt-6 rounded-t-3xl pb-10">
        <Search />
        <Carousel autoSlide={true} autoSlideInterval={2000} />
        <Options />
        <div className="my-10">
          <NewFood title="Newest Food" />
          <NewFood title="Big Promo" />
        </div>
        <BtnAddItems showAdd={showAdd} />
        <UploadFood isShown={isShown} setIsShown={setIsShown} />
        <AddStock />
      </section>
    </div>
  );
};
export default DashBoard;
