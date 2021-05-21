import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import style from "./Login.module.css";

class Login extends Component {
  signIn = () => {
    this.props.history.push("/signin");
  };
  render() {
    return (
      <div className={style.wrapper}>
        <h1 className={style.mainHeader}>Welcome to Family Budget Tracker</h1>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    users: state.usersReducer,
  };
};

export default connect(mapState, null)(Login);
