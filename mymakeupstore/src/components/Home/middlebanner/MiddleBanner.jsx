import React from "react";
import midbanner1 from "../../../assets/img/home/midbanner1.png";
import midbanner2 from "../../../assets/img/home/midbanner4.png";

const MiddleBanner = () => {
  return (
    <div className="w-[95%] mx-auto mt-12 md:mt-24">
      <div className="flex flex-row gap-x-4">
        <div className=" w-full lg:flex flex-col gap-y-4 bg-[#dad6d6] lg:w-[70%] ">
          <div className=" mx-auto justify-center px-10 mt-6">
            <h2 className="text-xl font-secondary font-semibold text-dark ">
              Natural and Ecological Beauty solutions for you
            </h2>
            <button className="btn-primary mt-4">See more</button>
          </div>
          <img src={midbanner1} alt="" className="max-w-[280px] mx-auto" />
        </div>
        <div className="hidden lg:block bg-[#f6c641] ">
          <div className="relative top-6 w-[300px] left-6">
            <h2 className="text-xl font-secondary font-semibold text-dark ">
              Beauty has a purpose and the purpose is you
            </h2>
            <button className="btn-dark mt-6">See more</button>
          </div>
          <img src={midbanner2} alt="loading image" className="pt-[1rem]" />
        </div>
      </div>
    </div>
  );
};

export default MiddleBanner;
