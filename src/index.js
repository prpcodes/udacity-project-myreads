import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SearchComponent from "./components/SearchComponent";

import "./index.css";

import { Route, Switch, BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={App} />
      <Route path="/search" component={SearchComponent} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root"),
);
