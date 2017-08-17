// @flow

import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import PageTwo from './PageTwo'

const App = () =>
  <div className="wrapper">
    <Navbar />
    <div className="app">
      <Route path="/" component={Home} />
      <Route path="/two" component={PageTwo} />
    </div>
  </div>;

export default App;
