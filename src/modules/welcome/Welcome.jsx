import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./Welcome.module.css";

class Welcome extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <h1 className={style.mainHeader}>Welcome to Family Budget Tracker</h1>
        <h3 className={style.secondaryHeader}>Sign in, please!</h3>
      </div>
    );
  }
}

export default connect(null, null)(Welcome);
