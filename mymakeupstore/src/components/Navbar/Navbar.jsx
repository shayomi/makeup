import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { PiShoppingCartLight } from "react-icons/pi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Brandlink from "../brandlink/Brandlink";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="max-w-[1240px] w-full  z-50 bg-white">
      <div className="flex flex-row px-3 w-[95%] mx-auto py-4 h-[60px] items-center justify-between">
        <Brandlink />
        <div className="hidden md:flex flex-row gap-x-8 px-3">
          <NavLink
            to="/"
            className="px-4 py-2 rounded-[12px] hover:bg-primary  duration-500 ease-in-out"
          >
            Home
          </NavLink>
          <NavLink
            to="search"
            className="px-4 py-2 rounded-[12px] hover:bg-primary  duration-500 ease-in-out"
          >
            Search
          </NavLink>
          <NavLink
            to="about"
            className="px-4 py-2 rounded-[12px] hover:bg-primary  duration-500 ease-in-out"
          >
            About
          </NavLink>
          <div className="flex flex-row gap-x-4 px-3 items-center">
            <AiOutlineHeart size={25} className="cursor-pointer " />
            <PiShoppingCartLight size={25} className="cursor-pointer " />
          </div>
        </div>
        <div onClick={handleNav} className="block md:hidden ">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full  bg-[#1e3329] ease-in-out duration-500 "
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <div className="mt-10 flex-col flex justify-center px-4">
            <Brandlink />
            <div className="flex flex-col gap-y-8 px-3 py-2 text-primary mt-6">
              <NavLink
                to="/"
                className="px-4 py-2 rounded-[12px] hover:bg-primary  duration-500 ease-in-out"
              >
                Home
              </NavLink>
              <NavLink
                to="search"
                className="px-4 py-2 rounded-[12px] hover:bg-primary  duration-500 ease-in-out"
              >
                Search
              </NavLink>
              <NavLink
                to="about"
                className="px-4 py-2 rounded-[12px] hover:bg-primary  duration-500 ease-in-out"
              >
                About
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
