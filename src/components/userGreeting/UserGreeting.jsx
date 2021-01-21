import React from "react";
import style from "./UserGreeting.module.css";
import logOutDay from "../../img/log-out-day.svg";
import logOutNight from "../../img/log-out-night.svg";

const UserGreeting = () => {
  const user = "Mikhail" + "!";

  return (
    <div className={style.wrapperDay}>
      <h3 className={style.textDay}>
        Hi, <span className={style.name}>{user}</span>
      </h3>
      <a href="/signin" className={style.imgContainer}>
        <img src={logOutDay} alt="" />
        <img src={logOutNight} className="disabled" alt="" />
      </a>
    </div>
  );
};

export default UserGreeting;
