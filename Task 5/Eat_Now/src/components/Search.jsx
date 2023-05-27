import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faArrowUp, faArrowDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <>
      <section>
        <form>
          <div
            className="py-[0.5rem] border border-[#5DBA63] rounded-xl mx-8 bg-white relative"
          >
            <input
              placeholder="Search"
              name="search"
              type="text"
              className="bg-transparent px-4 outline-none"
            />
            <span className="text-[#5DBA63]">
              <FontAwesomeIcon icon={faArrowUp} />
              <FontAwesomeIcon icon={faArrowDown} />
            </span>
            <button className="absolute right-0 top-0 p-3 px-3 bg-[#5DBA63] text-white cursor-pointer rounded-[10px] items-center justify-center flex">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Search;
