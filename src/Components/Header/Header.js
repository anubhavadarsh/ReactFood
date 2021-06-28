import React, { useContext } from "react";
import CartContext from "../../store/Cart-Context";

import Button from "../UI/Button/Button";

import style from "./Header.module.css";
const Header = (props) => {
  const ctx = useContext(CartContext);

  return (
    <div className={style["header"]}>
      <span className={style["header__logo"]}>
        React<span className={style["header__logo__span"]}>Meals</span>
      </span>
      <Button
        className={style["header__button"]}
        onClick={ctx.triggerModal}
        disabled={props.itemQunt < 1}
      >
        Your Cart
        <span className={style["header__button__span"]}>{props.itemQunt}</span>
      </Button>
    </div>
  );
};

export default Header;
