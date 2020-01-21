import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";



export const routes = {
  root: "/",
  signUpPage: "/signup",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.signUpPage} component={SignUpPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
