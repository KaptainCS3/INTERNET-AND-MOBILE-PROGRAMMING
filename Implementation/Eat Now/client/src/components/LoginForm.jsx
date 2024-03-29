import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import HeadText from "./HeadText";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ErrorMSG from "./ErrorMSG";
import SuccessLogin from "./SuccessLogin";
import { UserContext } from "../hooks/UserContext";
const LoginForm = () => {
  const navigate = useNavigate();
  const {user, setUser} = useContext(UserContext);
  const [loginStatus, setLoginStatus] = useState(false);
  const url = `${import.meta.env.VITE_BASE_URL}/login`;
  useEffect(() => {
    axios.get(url).then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].role);
        console.log(response);
      }
    });
  }, []);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "password be 8 characters or more")
        .required("Required"),
    }),
    onSubmit: ({ email, password }, { setSubmitting }) => {
      alert(JSON.stringify(email, password, null, 2));
      axios
        .post(
          url,
          {
            email,
            password,
          },
          {
            //allow crudentials
            [axios.defaults.withCredentials]: true,
          }
        )
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          setLoginStatus(true);
          alert("Login successful!");
          console.log(response.data.user);
          setUser(response.data);
          navigate("/dashboard");
          // formik.resetForm();
        })
        .catch((error) => {
          console.error(error);
          setLoginStatus(false);
          alert("Login failed. Please try again.");
        })
        .finally(() => {
          setSubmitting(false);
        });
      formik.resetForm();
    },
  });

  const userAuthenticated = () => {
    axios
      .get(`${url}/Auth`, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        alert(response);
      });
  };

  return (
    <section className="w-full h-[100vh] bg-[#5DBA63]">
      <NavLink to="/onboarding">
        <HeadText logValue="Login" route="/onboarding" />
      </NavLink>
      <form
        className="bg-[#F0F4FD] pt-8 pb-32 mt-16 px-4 rounded-t-3xl"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="hero pb-4">Welcome to Eat Now</h1>
        <div className="">
          <div className="flex flex-col">
            <label htmlFor="email" className="py-2 cursor-pointer">
              Email
            </label>
            <input
              placeholder="eg: myemail@example.com"
              type="email"
              {...formik.getFieldProps("email")}
              id="email"
              className="py-[0.6rem] px-4 border outline-none border-[#5DBA63] rounded-xl"
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorMSG error_value={formik.errors.email} />
            ) : null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="py-2 cursor-pointer">
              Password
            </label>
            <input
              placeholder="Input your password"
              type="password"
              {...formik.getFieldProps("password")}
              id="password"
              className="py-[0.6rem] px-4 border outline-none border-[#5DBA63] rounded-xl"
            />
            {formik.touched.password && formik.errors.password ? (
              <ErrorMSG error_value={formik.errors.password} />
            ) : null}
          </div>
          <div className="flex justify-between my-3 items-center">
            <div>
              <input
                type="checkbox"
                {...formik.getFieldProps("remember")}
                id="checked"
              />
              <label htmlFor="checked" className="pl-2 cursor-pointer">
                Remember Me
              </label>
            </div>
            <small>
              <NavLink className="text-[#2D9CDB]" to="/reset password">
                Forgot Password?
              </NavLink>
            </small>
          </div>
        </div>
        <div className="py-3">
          <button
            type="submit"
            disabled={formik.isSubmitting} // apply disabled attribute
            className="w-full py-3 bg-[#5DBA63] text-white rounded-xl"
          >
            {formik.isSubmitting ? "Login..." : "Login"}
          </button>
        </div>
        {loginStatus && (
          <button onClick={userAuthenticated}>Check if authenticated</button>
        )}
        <small className="flex justify-center pb-2">
          Don't have account?{" "}
          <NavLink className="text-[#2D9CDB] pl-[0.25rem]" to="/register">
            Sign up here
          </NavLink>
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
