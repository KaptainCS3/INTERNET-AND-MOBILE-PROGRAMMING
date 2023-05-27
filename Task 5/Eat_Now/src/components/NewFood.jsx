import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import FoodCard from "./FoodCard";
const NewFood = ({ title }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="pb-3">
      <div className="flex justify-between items-center px-5">
        <h1 className="text-2xl font-bold">{title}</h1>
        <button className="text-[#2F80ED]">See all</button>
      </div>
      <motion.div
        className="w-full min-h-[380px] flex overflow-hidden cursor-grab"
        ref={carousel}
      >
        <motion.div
          className="py-2"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          <motion.div
            className="flex flex-row justify-between"
            style={{ paddingLeft: "0.5%" }}
          >
            <FoodCard img="/assets/food_features/image1.jpg" />
            <FoodCard img="/assets/food_features/image2.jpg" />
            <FoodCard img="/assets/food_features/image3.jpg" />
            <FoodCard img="/assets/food_features/image4.jpg" />
            <FoodCard img="/assets/food_features/image5.jpg" />
            <FoodCard img="/assets/food_features/image6.jpg" />
            <FoodCard img="/assets/food_features/image7.jpg" />
            <FoodCard img="/assets/food_features/image8.jpg" />
            <FoodCard img="/assets/food_features/image9.jpg" />
            <FoodCard img="/assets/food_features/image10.jpg" />
            <FoodCard img="/assets/food_features/image11.jpg" />
            <FoodCard img="/assets/food_features/image12.jpg" />
            <FoodCard img="/assets/food_features/image13.jpg" />
            <FoodCard img="/assets/food_features/image14.jpg" />
            <FoodCard img="/assets/food_features/image15.jpg" />
            <FoodCard img="/assets/food_features/image16.jpg" />
            <FoodCard img="/assets/food_features/image17.jpg" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NewFood;
