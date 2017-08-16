// @flow

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";

const FourOhFour = () => <h1>404</h1>; // placeholder

const Header = () =>
  <div className="header">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  </div>;

export default Header;
