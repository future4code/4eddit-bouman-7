import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import FeedPage from "../FeedPage"




const routes = {
  root: "/",
  feedPage: "/feed"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={LoginPage} exact/>
        <Route path={routes.feedPage} component={FeedPage} exact/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
