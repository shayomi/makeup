import React from "react";
import banner3 from "../../../assets/img/home/banner3.png";

const Bottombanner = () => {
  return (
    <div className="w-[95%] mx-auto mt-24 bg-[#ffa6a4]">
      <div className=" flex flex-col  md:flex-row gap-x-4 justify-center">
        <div className=" flex flex-col gap-y-4 items-center justify-center ">
          <div className="  mt-6">
            <h2 className="text-xl font-secondary font-semibold text-dark ">
              Be Natural
            </h2>
            <h2 className="text-xl font-secondary font-semibold text-dark ">
              Be Beautiful
            </h2>
            <h2 className="text-xl font-secondary font-semibold text-dark ">
              Be You
            </h2>
            <button className="btn-primary mt-4">See more</button>
          </div>
        </div>
        <div className=" flex justify-center ">
          <img
            src={banner3}
            alt="loading image"
            className="pt-[1rem] max-w-[400px] w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Bottombanner;
