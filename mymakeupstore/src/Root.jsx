import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";

const RootLayout = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <div>
        <div>
          <div>
            <Navbar onShowCart={showCartHandler} />
          </div>
          <div className="">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </CartProvider>
  );
};

export default RootLayout;
