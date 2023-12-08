import React, { useContext, useState } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import CartProvider from "../../store/CartProvider";
import { NavLink } from "react-router-dom";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  //   const navigateToCheckoutHandler = () => {
  //     history.push("/checkout");
  //   };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          image={item.image}
          title={item.title}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <CartProvider>
      <Modal onClose={props.onClose}>
        {cartItems}
        <div className="flex flex-row justify-between font-secondary text-lg font-semibold">
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className="flex flex-row gap-x-10 justify-end mt-10">
          <button
            style={{ color: "red" }}
            className={classes["button-alt"]}
            onClick={props.onClose}
          >
            close
          </button>
          {hasItems && (
            <NavLink to="/checkout">
              <button
                onClick={props.onClose}
                className="font-primary font-bold text-md rounded-[9px] px-3 py-1 bg-primary"
              >
                Order
              </button>
            </NavLink>
          )}
        </div>
      </Modal>
    </CartProvider>
  );
};

export default Cart;
