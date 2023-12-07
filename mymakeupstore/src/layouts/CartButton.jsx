import React, { useEffect, useContext, useState } from "react";
import classes from "./CartButton.module.css";
import { PiShoppingCartLight } from "react-icons/pi";
import CartContext from "../store/CartContext";
import CartProvider from "../store/CartProvider";

const CartButton = (props) => {
  const [btnIsHihlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHihlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <CartProvider>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <PiShoppingCartLight size={25} className="cursor-pointer " />
        </span>
        <span className={classes.badge}> {numberOfCartItems}</span>
      </button>
    </CartProvider>
  );
};
export default CartButton;
