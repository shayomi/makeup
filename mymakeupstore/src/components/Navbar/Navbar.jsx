import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { PiShoppingCartLight } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="max-w-[1240px] w-full  z-50 bg-white">
      <div className="flex flex-row px-3 w-[95%] mx-auto py-4 h-[60px] items-center justify-between">
        <a href="#" className="text-[32px] font-bold text-green">
          Gentee
        </a>
        <div className="flex flex-row gap-x-8 px-3">
          <a
            href="#"
            className="px-4 py-2 rounded-[12px] hover:bg-primary  duration-500 ease-in-out"
          >
            Home
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-[12px] hover:bg-primary  duration-500 ease-in-out"
          >
            Search
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-[12px] hover:bg-primary  duration-500 ease-in-out"
          >
            About
          </a>
          <div className="flex flex-row gap-x-4 px-3 items-center">
            <AiOutlineHeart size={25} className="cursor-pointer " />
            <PiShoppingCartLight size={25} className="cursor-pointer " />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
