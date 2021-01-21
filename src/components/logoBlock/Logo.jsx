import React from "react";
import style from "./Logo.module.css";
import logoDay from "../../img/logo-black.png";
import logoNight from "../../img/logo-white.png";

const Logo = () => (
  <div className={style.wrapperDay}>
    <div className={style.imgContainer}>
      <img src={logoDay} alt="logo" />
      <img src={logoNight} className="disabled" alt="logo" />
    </div>
    <p className={style.textDay}>Family budget tracker</p>
  </div>
);

export default Logo;
