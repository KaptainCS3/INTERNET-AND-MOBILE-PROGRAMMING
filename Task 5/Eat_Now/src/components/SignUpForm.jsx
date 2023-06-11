import React from "react";
import ErrorMSG from "./ErrorMSG";
import HeadText from "./HeadText";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      contact: "",
      address: "",
      password: "",
      confirm_password: "",
      acceptedTerms: false,
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(3, "User name too short")
        .max(10, "User name too long")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      contact: Yup.string()
        .min(9, "Enter a valid phone number")
        .max(11, "Invalid contact")
        .required("Required"),
      address: Yup.string()
        .min(4, "Enter a valid address")
        .max(11, "Address too long")
        .required("Required"),
      password: Yup.string()
        .min(8, "password be 8 characters or more")
        .required("Required"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
      acceptedTerms: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions.")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });
  return (
    <section className="w-full h-[100vh] bg-[#5DBA63]">
      <NavLink to="/login">
        <HeadText logValue="Sign Up" route="/login" />
      </NavLink>
      <form
        className="bg-[#F0F4FD] pt-8 pb-32 mt-16 px-4 rounded-t-3xl"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="hero pb-4">Welcome to Eat Now</h1>
        <div className="">
          <div className="flex flex-col">
            <label htmlFor="userName" className="py-2 cursor-pointer">
              User name
            </label>
            <input
              placeholder="user name"
              type="text"
              {...formik.getFieldProps("userName")}
              id="userName"
              className="py-[0.6rem] px-4 border outline-none border-[#5DBA63] rounded-xl"
            />
            {formik.touched.userName && formik.errors.userName ? (
              <ErrorMSG error_value={formik.errors.userName} />
            ) : null}
          </div>
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
            <label htmlFor="contact" className="py-2 cursor-pointer">
              Phone Number
            </label>
            <input
              placeholder="eg: 2368939xxxx"
              type="text"
              {...formik.getFieldProps("contact")}
              id="contact"
              className="py-[0.6rem] px-4 border outline-none border-[#5DBA63] rounded-xl"
            />
            {formik.touched.contact && formik.errors.contact ? (
              <ErrorMSG error_value={formik.errors.contact} />
            ) : null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="py-2 cursor-pointer">
              Address
            </label>
            <input
              placeholder="eg: Str:CA"
              type="text"
              {...formik.getFieldProps("address")}
              id="address"
              className="py-[0.6rem] px-4 border outline-none border-[#5DBA63] rounded-xl"
            />
            {formik.touched.address && formik.errors.address ? (
              <ErrorMSG error_value={formik.errors.address} />
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
          <div className="flex flex-col">
            <label htmlFor="re-password" className="py-2 cursor-pointer">
              Re-enter Password
            </label>
            <input
              placeholder="Re-enter your password"
              type="password"
              {...formik.getFieldProps("confirm_password")}
              id="re-password"
              className="py-[0.6rem] px-4 border outline-none border-[#5DBA63] rounded-xl"
            />
            {formik.touched.confirm_password &&
            formik.errors.confirm_password ? (
              <ErrorMSG error_value={formik.errors.confirm_password} />
            ) : null}
          </div>
          <div className="mt-4">
            <input
              type="checkbox"
              {...formik.getFieldProps("acceptedTerms")}
              id="checked"
            />
            <label htmlFor="checked" className="pl-2 cursor-pointer">
              I accept the terms and conditions
            </label>
            {formik.touched.acceptedTerms && formik.errors.acceptedTerms ? (
              <ErrorMSG error_value={formik.errors.acceptedTerms} />
            ) : null}
          </div>
        </div>
        <div className="py-3">
          <button
            onClick={formik.isSubmitting}
            className="w-full py-3 bg-[#5DBA63] text-white rounded-xl"
          >
            Login
          </button>
        </div>
        <small className="flex justify-center pb-2">
          Already have account?{" "}
          <NavLink className="text-[#2D9CDB] pl-[0.25rem]" to="/login">
            Login here
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
