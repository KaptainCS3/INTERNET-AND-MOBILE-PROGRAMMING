import React from "react";
import HeadText from "./HeadText";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  return (
    <section className="w-full h-[100vh] bg-[#5DBA63]">
      <HeadText logValue="Login" route="/onboarding" />
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
          <div className="flex justify-between my-3 items-center">
            <div>
              <input type="checkbox" name="Checked" id="checked" />
              <label htmlFor="checked" className="pl-2 cursor-pointer">
                Remember Me
              </label>
            </div>
            <small>
              <Link className="text-[#2D9CDB]">Forgot Password?</Link>
            </small>
          </div>
        </div>
        <div className="py-3">
          <button className="w-full py-3 bg-[#5DBA63] text-white rounded-xl">
            Login
          </button>
        </div>
        <small className="flex justify-center pb-2">
          Don't have account?{" "}
          <Link className="text-[#2D9CDB] pl-[0.25rem]" to="/sign up">
            Sign up here
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
                Login with Google
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
                Login with Facebook
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

export default LoginForm;