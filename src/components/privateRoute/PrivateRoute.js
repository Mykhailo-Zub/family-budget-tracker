import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "../../modules/main/Main";
import Start from "../start/start";
import Login from "../../modules/login/Login";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return (
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="" exact render={() => <Redirect to="/main" />} />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/start" component={Start} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Start} />
      <Route path="" exact render={() => <Redirect to="/start" />} />
    </Switch>
  );
};

export default PrivateRoute;
