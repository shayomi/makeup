import React from "react";
import Bannerimg from "../../assets/img/home/banner.png";

const Banner = () => {
  return (
    <div className="w-[95%] mx-auto mt-2">
      <div className="flex-col md:grid grid-cols-2 px-6">
        <div className="hidden md:flex flex-col gap-y-2 max-w-[90%] pt-16">
          <h2 className="h2">
            The new lineup you will swear by the dullness, dryness and breakouts
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            magnam in ratione,
          </p>
          <div>
            <button className="btn-primary mt-6">See more</button>
          </div>
        </div>
        <div className="flex items-center mr-20">
          <img src={Bannerimg} alt="loading image" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
