import React from "react";
import Banner from "../components/Banner/Banner";
import TopProducts from "../components/TopProduct/TopProducts";
import MiddleBanner from "../components/middlebanner/MiddleBanner";
import Bottombanner from "../components/Bottombanner/Bottombanner";

const Home = () => {
  return (
    <div className="max-w-[1240px] w-full">
      <Banner />
      <TopProducts />
      <MiddleBanner />
      <Bottombanner />
    </div>
  );
};

export default Home;
