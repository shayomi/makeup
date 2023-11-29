import React from "react";
import Banner from "../components/Banner/Banner";
import TopProducts from "../components/TopProduct/TopProducts";

const Home = () => {
  return (
    <div className="max-w-[1240px] w-full">
      <Banner />
      <TopProducts />
    </div>
  );
};

export default Home;
