import React from "react";
import Hero from "../components/Store/Hero/Hero";
import Topbar from "../components/Store/Topbar/Topbar";
import ProductItem from "../components/Store/ProductItem/ProductItem";
import Search from "../components/Store/filters/Search";
import Brands from "../components/Store/filters/Brands";

const Store = () => {
  return (
    <div className="w-[95%] mx-auto pt-12">
      <Hero />
      <div className="flex flex-row items-center justify-evenly ">
        <Search />
        <Brands />
      </div>
    </div>
  );
};

export default Store;
