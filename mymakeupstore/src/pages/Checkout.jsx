// Checkout.js
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../store/CartContext";
import CartItem from "../components/Cart/CartItem";
import Cart from "../components/Cart/Cart";
import CartProvider from "../store/CartProvider";

const Checkout = (props) => {
  const cartCtx = useContext(CartContext);

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const submitOrderHandler = () => {
    // Implement your order submission logic here
    // You might want to send a request to your server to process the order
    // After the order is successfully submitted, you can clear the cart
    // cartCtx.clearCart();
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <div
        className="container mx-auto pt-24 mb-24"
        onShowCart={showCartHandler}
      >
        <h1 className="text-2xl font-secondary font-semibold mb-4 ">
          Checkout
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 gap-x-6">
          <div>
            <h2 className="text-xl font-semibold font-secondary mb-2">
              Order Summary
            </h2>
            <ul>
              {cartCtx.items.map((item) => (
                <CartItem
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  amount={item.amount}
                  price={item.price}
                />
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-md font-medium font-primary mb-2 px-12">
              Payment Details
            </h2>
            {/* Add your payment form or information here */}
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center border-t border-gray-300 pt-4">
            <span className="text-lg font-semibold font-sendary">
              Total Amount:
            </span>
            <span className="text-lg font-semibold font-secondary">
              ${cartCtx.totalAmount.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-end mt-8 items-center gap-x-6">
            <button onClick={submitOrderHandler} className="btn-primary">
              Submit Order
            </button>
            <button
              onClick={props.onShowCart}
              className="ml-4 text-[red] font-primary font-medium hover:underline"
            >
              Back to Cart
            </button>
          </div>
        </div>
      </div>
    </CartProvider>
  );
};

export default Checkout;
