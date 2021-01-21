import React from "react";
import Logo from "../../components/logoBlock/Logo";
import NavPanel from "../../components/navPanel/NavPanel";
import UserGreeting from "../../components/userGreeting/UserGreeting";
import style from "./LeftPanels.module.css";

const LeftPanels = () => (
  <div className={style.wrapper}>
    <Logo />
    <UserGreeting />
    <NavPanel />
  </div>
);

export default LeftPanels;
