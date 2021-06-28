import React from "react";

import style from "./Card.module.css";

const Card = (props) => {
  let classes = props.className;
  return <div className={`${classes} ${style["card"]}`}>{props.children}</div>;
};

export default Card;
