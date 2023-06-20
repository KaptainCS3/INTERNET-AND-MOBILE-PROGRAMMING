import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FoodCard from "./FoodCard";
import list from "../../list";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const Carousel = ({ autoSlide = true, autoSlideInterval = 3000 }) => {
  const [index, setIndex] = useState(0);
  const { img, id } = list[index];

  // This function helps us check and make sure we dont go above the lenght of our array and below its lenght
  const checkNumber = (number) => {
    if (number > list.length - 1) {
      return 0;
    }
    if (number < 0) return list.length - 1;
    return number;
  };

  // This function help us in moving to the previous element
  const prevItem = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  // This function help us in moving to the next element
  const nextItem = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextItem, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <article className="review py-8 relative">
      {/* <Fade> */}
      <div
        className="img-container px-8 transition-transform ease-out duration-250"
        // style={{ transform: `translateX(-${index * 100}%)` }}
      >
        <img
          src={img}
          alt={id}
          className="person-img rounded-xl cursor-pointer hover:shadow-xl"
        />
      </div>
      {/* </Fade> */}
      <div className="button-container absolute inset-0 flex justify-between items-center">
        <button className="prev-btn" onClick={prevItem}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="next-btn" onClick={nextItem}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="absolute bottom-0 right-0 left-0">
        <div className="flex items-center justify-between w-1/4 mx-auto">
          {list.map((_, i) => {
            return (
              <div
                className={`transition-all w-2 h-2 bg-[#5DBA63] rounded-full ${
                  index === i ? "p-[0.4rem]" : "bg-opacity-50"
                }`}
                key={_.id}
              ></div>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default Carousel;
