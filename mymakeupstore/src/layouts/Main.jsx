import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home";

const Main = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
  );
};

export default Main;
