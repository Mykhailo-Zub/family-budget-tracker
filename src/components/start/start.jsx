import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Welcome from "../../modules/welcome/Welcome";
import style from "./start.module.css";

class Start extends Component {
  login = () => {
    this.props.history.push("/login");
  };
  register = () => {
    this.props.history.push("/register");
  };
  render() {
    return (
      <div className={style.wrapper}>
        <Welcome />
        <h2 className={style.secondaryHeader}>Have an account?</h2>
        <button className={style.loginBtn} type="button" onClick={this.login}>
          Login
        </button>
        <h2 className={style.secondaryHeader}>Don`t have an account?</h2>
        <button
          className={style.registerBtn}
          type="button"
          onClick={this.register}
        >
          Register
        </button>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    users: state.usersReducer,
  };
};

export default connect(mapState, null)(Start);
