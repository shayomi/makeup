import React from "react";
import Banner from "../components/Home/Banner/Banner";
import TopProducts from "../components/Home/TopProduct/TopProducts";
import MiddleBanner from "../components/Home/middlebanner/MiddleBanner";
import Bottombanner from "../components/Home/Bottombanner/Bottombanner";
import BestProducts from "../components/Home/Best/BestProducts";
import Elegance from "../components/Home/Elegance/Elegance";
import Mode from "../components/Home/mode/Mode";
import Newsletter from "../components/Home/newsletter/Newsletter";

const Home = () => {
  return (
    <div className="max-w-[1240px] w-full">
      <Banner />
      <TopProducts />
      <MiddleBanner />
      <BestProducts />
      <Bottombanner />
      <Elegance />
      <Mode />
      <Newsletter />
    </div>
  );
};

export default Home;
