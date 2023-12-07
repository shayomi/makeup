import classes from "./CartItem.module.css";
import CartProvider from "../../store/CartProvider";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <CartProvider>
      <li className={classes["cart-item"]}>
        <div>
          <img className="w-[100px]" src={props.image} />
          <h2 style={{ color: "red" }}>{props.title}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>{price}</span>
            <span className={classes.amount}>x {props.amount}</span>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>−</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </li>
    </CartProvider>
  );
};

export default CartItem;
