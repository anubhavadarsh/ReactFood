import React, { useRef } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

import style from "./MealItem.module.css";

const MealItem = (props) => {
  let inputRef = useRef();

  function clickHandler() {
    if (inputRef.current.value === "") {
      return;
    }
    props.onOrder({
      quantity: +inputRef.current.value,
      title: props.title,
      price: +props.price,
    });
    inputRef.current.value = "";
  }

  let classes = props.className;
  return (
    <Card className={`${style["mealItem__card"]} ${classes}`}>
      <header className={style["mealItem__header"]}>{props.title}</header>
      <p className={style["mealItem__desc"]}>{props.description}</p>
      <Button
        className={style["mealItem__button"]}
        type="submit"
        onClick={clickHandler}
      >
        Add
      </Button>
      <span className={style["mealItem__price"]}>${props.price}</span>
      <form className={style["mealItem__form"]}>
        <input
          ref={inputRef}
          type="number"
          min="0"
          className={style["mealItem__form__input"]}
        />
      </form>
    </Card>
  );
};

export default MealItem;
