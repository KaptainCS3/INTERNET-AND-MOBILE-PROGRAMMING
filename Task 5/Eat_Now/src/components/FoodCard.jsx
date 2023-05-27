import React from "react";
const FoodCard = ({img}) => {
  const card = {
    marginRight: 2,
    marginTop: "0.4%",
    // minWidth: "15%",
  };
  return (
    <>
      <section style={card} className="">
        <div className="w-full pr-4">
          <div class="w-full border border-[#5DBA63] rounded-2xl">
            <div class="h-[180px] w-64">
              <img
                className="rounded-t-[14px] w-full h-full object-cover"
                src={img}
                alt=""
              />
            </div>
            <div className="w-full bg-white p-3 relative rounded-b-2xl">
              <div className="flex justify-end">
                <span>0.3km</span>
              </div>
              <div className="absolute h-10 w-10 left-0 top-0 ml-3 -mt-5">
                <img
                  src="/assets/avarta.jpg"
                  alt=""
                  className="rounded-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Pizza</h3>
              <span className="text-[#5DBA63]">3 left</span>
              <div className="my-2 text-xl">
                <span className="text-[#2F80ED] bg-[#C0D1E6] p-2 rounded-xl mr-[0.25rem]">
                  50%
                </span>
                <span className="mr-[0.25rem] text-[#BDBDBD] line-through">
                  100.000
                </span>
                <span>50.000</span>
              </div>
              <small className="text-[#BDBDBD]">Available 16:00 - 19:00</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodCard;
