import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const BtnAddItems = ({ showAdd }) => {
  return (
    <div className="flex justify-end -mt-8 pb-16 mr-6" onClick={showAdd}>
      <div className="flex justify-center items-center w-[4rem] h-[4rem] rounded-full bg-[#5DBA63] font-bold shadow cursor-pointer">
        <FontAwesomeIcon
          icon={faPlus}
          className="text-white text-xl font-medium"
        />
      </div>
    </div>
  );
};

export default BtnAddItems;
