import React from "react";
import { Redirect } from "react-router-dom";
import Main from "../../modules/main/Main";
import Welcome from "../../modules/welcome/Welcome";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return (
      <>
        <Main />
      </>
    );
  }
  return <Welcome />;
};

export default PrivateRoute;
