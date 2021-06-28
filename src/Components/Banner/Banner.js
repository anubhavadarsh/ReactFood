import React from "react";

import style from "./Banner.module.css";
const Banner = () => {
  return (
    <div className={style["banner"]}>
      <div className={style["banner__typo"]}>
        <h2>
          Be The Fastest
          <br /> In Delivering <br /> Your <span>Food</span>
        </h2>
        <p>
          Our job is filling your tummy with delicious food and
          <br /> with fast and free delivery
        </p>
      </div>
      <div className={style["banner__illus"]}></div>
    </div>
  );
};

export default Banner;
