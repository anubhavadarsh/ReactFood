import React, { useContext } from "react";
import CartContext from "../../store/Cart-Context";

import Button from "../UI/Button/Button";

import style from "./CartItem.module.css";

const CartItem = (props) => {
  const ctx = useContext(CartContext);

  return (
    <div className={style["cartItem"]}>
      <div className={style["cartItem__desc"]}>
        <h3>{props.title}</h3>
        <span>${props.price.toPrecision(4)}</span>
      </div>
      <div className={style["cartItem__act"]}>
        <span className={style["cartItem__act__price"]}>X{props.qnt}</span>
        <Button
          onClick={() => {
            ctx.decQuan({
              title: props.title,
              price: props.price / props.qnt,
              quantity: props.qnt,
            });
          }}
        >
          -
        </Button>
        <Button
          onClick={() => {
            ctx.incQuan({
              title: props.title,
              price: props.price / props.qnt,
              quantity: props.qnt,
            });
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
