import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavPanel.module.css";

const NavPanel = () => {
  return (
    <div className={style.wrapperDay}>
      <NavLink to="/charges" activeClassName="selected">
        Charges
      </NavLink>
      <NavLink to="/incomes" activeClassName="selected">
        Incomes
      </NavLink>
      <NavLink to="/cards" activeClassName="selected">
        Cards
      </NavLink>
      <NavLink to="/settings" activeClassName="selected">
        Settings
      </NavLink>
    </div>
  );
};

export default NavPanel;
