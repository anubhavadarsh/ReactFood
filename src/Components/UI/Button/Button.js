import React from "react";

import style from "./Button.module.css";
const Button = (props) => {
  let classes = props.className;
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`${style.button} ${classes}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
