import React from "react";
import HeadText from "./HeadText";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SignUpForm = () => {
  return (
    <section className="w-full h-[100vh] bg-[#5DBA63]">
      <HeadText logValue="Sign Up" route="/login" />
      <form className="bg-[#F0F4FD] pt-8 pb-32 mt-16 px-4 rounded-t-3xl">
        <h1 className="hero pb-4">Welcome to Eat Now</h1>
        <div className="">
          <div className="flex flex-col">
            <label htmlFor="email" className="py-2 cursor-pointer">
              Email
            </label>
            <input
              placeholder="eg: myemail@example.com"
              type="email"
              name="email"
              id="email"
              className="py-[0.25rem] px-4 border outline-none border-[#5DBA63] rounded-xl"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="contact" className="py-2 cursor-pointer">
              Phone Number
            </label>
            <input
              placeholder="eg: 2368939xxxx"
              type="text"
              name="contact"
              id="contact"
              className="py-[0.25rem] px-4 border outline-none border-[#5DBA63] rounded-xl"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="py-2 cursor-pointer">
              Password
            </label>
            <input
              placeholder="Input your password"
              type="password"
              name="password"
              id="password"
              className="py-[0.25rem] px-4 border outline-none border-[#5DBA63] rounded-xl"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="re-password" className="py-2 cursor-pointer">
              Re-enter Password
            </label>
            <input
              placeholder="Re-enter your password"
              type="password"
              name="re-password"
              id="re-password"
              className="py-[0.25rem] px-4 border outline-none border-[#5DBA63] rounded-xl"
            />
          </div>
        </div>
        <div className="py-3">
          <button className="w-full py-3 bg-[#5DBA63] text-white rounded-xl">
            Login
          </button>
        </div>
        <small className="flex justify-center pb-2">
          Already have account?{" "}
          <Link className="text-[#2D9CDB] pl-[0.25rem]" to="/login">
            Login here
          </Link>
        </small>
        <div className="flex justify-center items-center pb-8">
          <span className="w-[45%] border-t border-[#5DBA63]"></span>
          <span className="px-4 uppercase text-[1rem] text-[#4C4E4C]">or</span>
          <span className="w-[45%] border-t border-[#5DBA63]"></span>
        </div>
        <div>
          <div className="flex justify-between items-center border border-[#5DBA63] py-2 mb-6 rounded-xl px-4">
            <div className="flex items-center">
              <img src="/assets/google.png" alt="google logo" />
              <span className="ml-2 text-[#4C4E4C] text-[1rem]">
                sign up with Google
              </span>
            </div>
            <div className="bg-[#5DBA63] px-3 py-[0.25rem] rounded-md">
              <FontAwesomeIcon icon={faArrowRight} className="text-white" />
            </div>
          </div>
          <div className="flex justify-between items-center border border-[#5DBA63] py-2 rounded-xl px-4">
            <div className="flex items-center">
              <img src="/assets/facebook.png" alt="facebook logo" />
              <span className="ml-2 text-[#4C4E4C] text-[1rem]">
                sign up with Facebook
              </span>
            </div>
            <div className="bg-[#5DBA63] px-3 py-[0.25rem] rounded-md">
              <FontAwesomeIcon icon={faArrowRight} className="text-white" />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SignUpForm;
