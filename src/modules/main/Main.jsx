import React from "react";
import style from "./Main.module.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LeftPanel from "../leftPanel/LeftPanel";
import TopPanel from "../topPanel/TopPanel";

const Main = () => {
  return (
    <div className={style.wrapper}>
      <LeftPanel />
      <TopPanel />
    </div>
  );
};

export default Main;
