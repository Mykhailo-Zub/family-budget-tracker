import React from "react";
import style from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.mainHeader}>Welcome to Family Budget Tracker!</h1>
    </div>
  );
};

export default Welcome;
