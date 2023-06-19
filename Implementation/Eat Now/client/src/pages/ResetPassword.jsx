import React from "react";
import HeadText from "../components/HeadText";
import ErrorMSG from "../components/ErrorMSG";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });
  return (
    <div>
      <section className="w-full h-[100vh] bg-[#5DBA63]">
        <Link to="/login">
          <HeadText logValue="Return to Login" route="/login" />
        </Link>
        <form
          className="bg-[#F0F4FD] pt-8 h-full mt-16 px-4 rounded-t-3xl"
          onSubmit={formik.handleSubmit}
        >
          <h1 className="hero pb-4">Reset Password</h1>
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
          <div className="py-3">
            <button className="w-full py-3 bg-[#5DBA63] text-white rounded-xl">
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ResetPassword;
