import React, { useContext, useEffect } from "react";

import Card from "../UI/Card/Card";
import CartItem from "./CartItem";
import Button from "../UI/Button/Button";

import style from "./Cart.module.css";
import CartContext from "../../store/Cart-Context";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  let total = 0;
  for (let i in props.totalOrder) {
    total += props.totalOrder[i].price;
  }

  let cartItem = props.totalOrder
    .filter((order) => {
      return order.quantity !== 0;
    })
    .map((order) => {
      return (
        <CartItem
          key={Math.random() + Math.random() * 2}
          title={order.title}
          qnt={order.quantity}
          price={order.price}
        ></CartItem>
      );
    });

  useEffect(() => {
    if (cartItem.length === 0) {
      ctx.closeModal();
    }
  }, [cartItem, ctx]);

  return (
    <Card className={style["cart"]}>
      {cartItem}
      <div className={style["cart__price"]}>
        <span>Total Amount: </span>
        <span>${total.toPrecision(4)}</span>
      </div>
      <div className={style["cart__btns"]}>
        <Button type="button" onClick={ctx.closeModal}>
          close
        </Button>
        <Button
          onClick={() => {
            console.log("ordering....");
          }}
        >
          order
        </Button>
      </div>
    </Card>
  );
};

export default Cart;
