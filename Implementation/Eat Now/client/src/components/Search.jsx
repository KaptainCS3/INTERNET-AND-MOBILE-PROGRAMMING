import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMSG from "./ErrorMSG";
import {
  faArrowUp,
  faArrowDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
    }),
    onSubmit: ({ name }, { setSubmitting }) => {
      alert(JSON.stringify(name, null, 2));
      // formik.resetForm();
      axios
        .post(`${import.meta.env.VITE_BASE_URL}/search`, {
          name,
          credentials: "include",
        })
        .then((response) => {
          console.log(response);
          alert("Food Found");
        })
        .catch((error) => {
          console.error(error);
          alert("Nothing Found!!");
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });
  return (
    <>
      <section>
        <form onSubmit={formik.handleSubmit}>
          <div className="py-[0.5rem] border border-[#5DBA63] rounded-xl mx-8 bg-white relative">
            <input
              placeholder="Search food product........"
              {...formik.getFieldProps("name")}
              className="bg-transparent px-4 outline-none"
            />
            <span className="text-[#5DBA63]">
              <FontAwesomeIcon icon={faArrowUp} />
              <FontAwesomeIcon icon={faArrowDown} />
            </span>
            <button
              type="submit"
              disabled={formik.isSubmitting} // apply disabled attribute
              className="absolute right-0 top-0 p-3 px-3 bg-[#5DBA63] text-white cursor-pointer rounded-[10px] items-center justify-center flex"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className="mx-8">
            {formik.errors.name ? (
              <ErrorMSG error_value={formik.errors.name} />
            ) : null}
          </div>
        </form>
      </section>
    </>
  );
};

export default Search;
