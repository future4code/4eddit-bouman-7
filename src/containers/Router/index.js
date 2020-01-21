import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import FeedPage from "../FeedPage";

export const routes = {
  root: "/",
  signUpPage: "/signup",
  feedPage: "/feed"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.signUpPage} component={SignUpPage} />
        <Route exact path={routes.feedPage} component={FeedPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
