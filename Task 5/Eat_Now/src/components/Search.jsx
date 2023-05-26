import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <>
      <section>
        <form>
          <div className="py-[0.25rem] border border-[#5DBA63] rounded-xl mx-8 bg-white">
            <input
              placeholder="Search"
              name="search"
              type="search"
              className="bg-transparent px-4 outline-none"
            />
            <span className="text-[#5DBA63]">
              <FontAwesomeIcon icon={faArrowUp} />
              <FontAwesomeIcon icon={faArrowDown} />
            </span>
            <div>{/* <FontAwesomeIcon icon={faSeach} /> */}</div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Search;
