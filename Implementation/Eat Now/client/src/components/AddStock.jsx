import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ErrorMSG from "./ErrorMSG";
const AddStock = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      quantity: "",
      category_of_food: "",
      expiry_date: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "User name too short")
        .max(20, "User name too long")
        .required("Required"),
      quantity: Yup.string().required("Required"),
      category_of_food: Yup.string().required("Required"),
      expiry_date: Yup.string().required("Required"),
    }),
    onSubmit: (
      { name, quantity, category_of_food, expiry_date, foodDonorId },
      { setSubmitting }
    ) => {
      alert(
        JSON.stringify(name, quantity, category_of_food, expiry_date, null, 2)
      );
      axios
        .post(`${import.meta.env.VITE_BASE_URL}/add-stocks`, {
          name,
          quantity,
          category_of_food,
          expiry_date,
          foodDonorId: 3,
          credentials: "include",
        })
        .then((response) => {
          console.log(response);
          alert("Product added successful!");
          navigate("/dashboard");
          formik.resetForm();
        })
        .catch((error) => {
          console.error(error);
          alert("failed to add product. Please try again.");
        })
        .finally(() => {
          setSubmitting(false);
        });
      formik.resetForm();
      formik.values.acceptedTerms = false;
    },
  });
  return (
    <section className="w-full h-[100vh]">
      <form
        className="bg-[#F0F4FD] pt-8 pb-32 mt-16 px-4 rounded-t-3xl"
        onSubmit={formik.handleSubmit}
      >
        <div className="">
          <div className="flex flex-col">
            <label htmlFor="pName" className="py-2 cursor-pointer">
              Product name
            </label>
            <input
              placeholder="name"
              type="text"
              {...formik.getFieldProps("name")}
              id="pName"
              className="py-[0.6rem] px-4 border outline-none border-[#5DBA63] rounded-xl"
            />
            {formik.touched.name && formik.errors.name ? (
              <ErrorMSG error_value={formik.errors.name} />
            ) : null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="qty" className="py-2 cursor-pointer">
              quantity
            </label>
            <input
              placeholder="qty...."
              type="number"
              {...formik.getFieldProps("quantity")}
              id="qty"
              className="py-[0.6rem] px-4 border outline-none border-[#5DBA63] rounded-xl"
            />
            {formik.touched.quantity && formik.errors.quantity ? (
              <ErrorMSG error_value={formik.errors.quantity} />
            ) : null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="fd_cat" className="py-2 cursor-pointer">
              Food category
            </label>
            <select
              id="fd_cat"
              {...formik.getFieldProps("category_of_food")}
              className="py-[0.6rem] px-4 border outline-none border-[#5DBA63] rounded-xl"
            >
              <option value="">-- choose category --</option>
              <option value="fruit & vegs">fruit and vegetables.</option>
              <option value="starch">
                potatoes, bread, rice, pasta and other starchy carbohydrates
              </option>
              <option value="proteins">
                beans, pulses, fish, eggs, meat and other proteins.
              </option>
              <option value="dairy foods">dairy and alternatives.</option>
              <option value="fats & oil">oils and spreads.</option>
              <option value="others">Others...</option>
            </select>
            {formik.touched.category_of_food &&
            formik.errors.category_of_food ? (
              <ErrorMSG error_value={formik.errors.category_of_food} />
            ) : null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="py-2 cursor-pointer">
              Expiry Data
            </label>
            <input
              // placeholder="Product description"
              type="datetime-local"
              {...formik.getFieldProps("expiry_date")}
              id="description"
              className="py-[0.6rem] px-4 border outline-none border-[#5DBA63] rounded-xl"
            />
            {formik.touched.expiry_date && formik.errors.expiry_date ? (
              <ErrorMSG error_value={formik.errors.expiry_date} />
            ) : null}
          </div>
        </div>
        <div className="py-3">
          <button
            type="submit"
            disabled={formik.isSubmitting} // apply disabled attribute
            className="w-full py-3 bg-[#5DBA63] text-white rounded-xl"
          >
            {formik.isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddStock;
