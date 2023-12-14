import React, { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { PiShoppingCartLight } from "react-icons/pi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Brandlink from "../brandlink/Brandlink";
// import SearchBar from "../UI/Search";
import CartButton from "../../layouts/CartButton";
import axios from "axios";
import { SearchBar } from "../UI/Search/Searchbar";
import { SearchResultsList } from "../UI/Search/SearchResultList";

const Navbar = (props) => {
  // const [apiData, setApiData] = useState([]);
  const [results, setResults] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://makeup-api.herokuapp.com/api/v1/products.json")
  //     .then((response) => {
  //       setApiData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="max-w-[1240px] w-full fixed z-40 bg-white">
      <div className="flex flex-row px-0 md:px-3 w-[95%] mx-auto py-12 h-[60px] items-center justify-between ">
        <Brandlink />
        <div className="hidden lg:flex">
          {/* <SearchBar data={apiData} /> */}
          <SearchBar setResults={setResults} />
          {results && results.length > 0 && (
            <SearchResultsList results={results} />
          )}
        </div>
        <div className="hidden sm:flex flex-row gap-x-8 px-0 md:px-3">
          <NavLink
            to="/"
            className="px-4 py-2 rounded-[12px] hover:bg-primary  duration-500 ease-in-out"
          >
            Home
          </NavLink>
          <NavLink
            to="/store"
            className="px-4 py-2 rounded-[12px] hover:bg-primary  duration-500 ease-in-out"
          >
            Store
          </NavLink>

          <NavLink
            to="about"
            className="px-4 py-2 rounded-[12px] hover:bg-primary  duration-500 ease-in-out"
          >
            About
          </NavLink>
          <div className="flex flex-row gap-x-4 px-3 items-center">
            <CartButton onClick={props.onShowCart} />
          </div>
        </div>
        <div className="flex flex-row  ml-24 md:ml-48 gap-x-3 md:gap-x-9 px-3 sm:hidden">
          <div className="  flex flex-row gap-x-4 px-0 items-center">
            <CartButton onClick={props.onShowCart} />
          </div>
        </div>
        <div onClick={handleNav} className="block sm:hidden ">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[50%] h-full  bg-[#1e3329] ease-in-out duration-500 "
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <div
            className="mt-10 flex-col flex justify-center px-4"
            onClick={handleNav}
          >
            <Brandlink />
            <div className=" pt-12">{/* <SearchBar /> */}</div>
            <div className="flex flex-col gap-y-8 px-3 py-2 text-white mt-6">
              <NavLink
                to="/"
                className="px-4 py-2 rounded-[12px] hover:bg-primary  duration-500 ease-in-out"
              >
                Home
              </NavLink>
              <NavLink
                to="/store"
                className="px-4 py-2 rounded-[12px] hover:bg-primary  duration-500 ease-in-out"
              >
                Store
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
