import React from "react";
import giftbox from "../../../assets/img/home/giftbox.png";

const Newsletter = () => {
  return (
    <div className="w-[95%] mx-auto mt-24 bg-[#f6c641] mb-24">
      <div className="flex flex-col  md:flex-row gap-x-6 py-6">
        <div className="w-[60%] mx-auto">
          <img src={giftbox} alt="image loading" className="" />
        </div>
        <div className="flex flex-col gap-y-4 py-6 px-6">
          <h2 className="text-xl  font-secondary font-semibold text-dark ">
            We have something for you
          </h2>
          <p className="font-primary text-sm text-dark leading-6  font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            iusto ratione? Nemo nam unde sed, totam nobis, labore sequi aut
            dignissimos consequatur atque mollitia odit sapiente hic, quos ullam
            odio!
          </p>
          <form className=" pt-2">
            <label for="email" className="font-bold font-secondary">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-b-[2px] border-black  bg-transparent"
            />
            <button className="btn-dark mt-8">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
