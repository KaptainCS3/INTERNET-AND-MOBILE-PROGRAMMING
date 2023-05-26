import React from "react";
const FoodCard = () => {
  const card = {
    marginRight: 15,
    marginTop: "7%",
    minWidth: "35%",
  };
  return (
    <>
      <section style={card} className="">
        <div className="w-full">
          <div class="w-full">
            <div class="">
              <img className="rounded-t-xl h-32 w-full" src="/assets/image12.jpg" alt="" />
            </div>
            <div className="w-full">
              <h3>Pizza</h3>
              <span>3 left</span>
              <div>50%</div>
              <small>Available 16:00 - 19:00</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodCard;
