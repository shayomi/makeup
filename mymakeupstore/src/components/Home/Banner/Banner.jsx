import React from "react";
import Bannerimg from "../../../assets/img/home/banner.png";

const Banner = () => {
  return (
    <div className="w-[95%] mx-auto pt-12 md:pt-36">
      <div className="flex-col gap-y-6 md:grid grid-cols-2 px-6">
        <div className="flex flex-col gap-y-2 max-w-[90%] pt-16">
          <h2 className="font-secondary text-dark font-semibold text-xl md:text-2xl ">
            The new lineup you will swear by the dullness, dryness and breakouts
          </h2>
          <p className="font-primary text-normal text-[11px] md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            magnam in r,
          </p>
          <div className="hidden md:flex">
            <button className="btn-primary mt-6">Visit our store</button>
          </div>
        </div>
        <div className="flex items-center mr-20 mt-6 md:mt-0">
          <img src={Bannerimg} alt="loading image" className="w-full" />
        </div>
        <div className="flex md:hidden">
          <button className="btn-primary mt-6">Visit our store</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
