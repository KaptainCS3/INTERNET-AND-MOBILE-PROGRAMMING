import React from "react";
import OnBoardMain from "../components/OnBoardMain";

const OnBoarding = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#F0F4FD]">
      <OnBoardMain
        img="/assets/Onboard.png"
        title="Save the World"
        desc="You can save the world by giving out the food stuff you no longer need. By doing that, you help the world in reduce food waste"
      />
    </div>
  );
};

export default OnBoarding;
