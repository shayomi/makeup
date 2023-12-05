import React from "react";
import Hero from "../components/Store/Hero/Hero";

import ProductItem from "../components/Store/ProductItem/ProductItem";

const Store = () => {
  return (
    <div className="w-[95%] mx-auto pt-24">
      <Hero />
      <ProductItem />
    </div>
  );
};

export default Store;
