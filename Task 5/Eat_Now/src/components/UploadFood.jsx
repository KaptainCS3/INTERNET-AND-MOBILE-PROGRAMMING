import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import ErrorMSG from "./ErrorMSG";
const UploadFood = ({ isShown, setIsShown }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      quantity: "",
      category_of_food: "",
      description: "",
      picture: null,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(3, "User name too short")
        .max(20, "User name too long")
        .required("Required"),
      quantity: Yup.number().required("Required"),
      description: Yup.string()
        .min(20, "description too short")
        .max(50, "description too long")
        .required("Required"),
      picture: Yup.mixed()
        .test(
          "fileType",
          "Invalid file type",
          (value) => value && ["image/jpeg", "image/png"].includes(value.type)
        )
        .required("Required"),
    }),
    onSubmit: (
      { name, quantity, category_of_food, description, picture },
      { setSubmitting }
    ) => {
      // TODO: Send the form data to the server
      console.log(
        JSON.stringify(
          name,
          quantity,
          category_of_food,
          description,
          picture,
          null,
          2
        )
      );
      axios
        .post("http://localhost:8080/api/upload", {
          name: name,
          quantity: quantity,
          category_of_food: category_of_food,
          description: description,
          picture: picture,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
          alert("upload successful!");
          formik.resetForm();
        })
        .catch((error) => {
          console.error(error);
          alert("failed. Please try again.");
        })
        .finally(() => {
          setSubmitting(false);
        });
      // formik.resetForm();
    },
  });

  return (
    <article className={isShown ? "upload_modal" : "hidden"}>
      <section className="w-full animate">
        <FontAwesomeIcon
          icon={faXmark}
          className="text-3xl text-white absolute flex justify-center top-0 items-center w-full mt-6 cursor-pointer"
          onClick={() => setIsShown()}
        />
        <form
          className="pt-8 pb-24 bg-white mt-16 px-4 rounded-t-3xl"
          onSubmit={formik.handleSubmit}
          encType="multipart/form-data" // add the enctype attribute
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
                Description
              </label>
              <textarea
                placeholder="Product description"
                type="text"
                {...formik.getFieldProps("description")}
                id="description"
                className="py-[0.6rem] px-4 border outline-none border-[#5DBA63] rounded-xl"
              />
              {formik.touched.description && formik.errors.description ? (
                <ErrorMSG error_value={formik.errors.description} />
              ) : null}
            </div>
            <div className="mt-8 relative flex flex-col py-12 border-dashed border-2 rounded-xl border-[#5DBA63]">
              <input
                placeholder="Upload image"
                name="image"
                type="file"
                hidden
                onChange={(event) => {
                  formik.setFieldValue("picture", event.currentTarget.files[0]);
                }}
                id="pic"
                className="py-[0.6rem] px-4 border outline-none border-[#5DBA63] rounded-xl"
              />
              {/*  justify-between w-full flex-col  py-5 */}
              <div className="flex items-center flex-col overflow-hidden text-[#5DBA63]">
                <FontAwesomeIcon
                  icon={faCloudArrowUp}
                  className="text-[3rem] pb-16"
                />
                <label
                  htmlFor="pic"
                  className="pt-16 cursor-pointer text-xl w-full justify-center items-center flex absolute h-full overflow-hidden top-0"
                >
                  Browse Image to Upload
                </label>
                {formik.values.picture && (
                  <small>{formik.values.picture.name}</small>
                )}
              </div>
              {formik.touched.picture && formik.errors.picture ? (
                <ErrorMSG error_value={formik.errors.picture} />
              ) : null}
            </div>
          </div>
          <div className="py-3 mt-8">
            <button
              type="submit"
              // disabled={formik.isSubmitting} // apply disabled attribute
              className="w-full py-3 bg-[#5DBA63] text-white rounded-xl"
            >
              {formik.isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </section>
    </article>
  );
};

export default UploadFood;
