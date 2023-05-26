import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import FoodCard from "./FoodCard";
const NewFood = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  return (
    <div className="flex">
      <FoodCard />
      <FoodCard />
      <FoodCard />
    </div>
  );
};

export default NewFood;
