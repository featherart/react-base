// @flow

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";

const App = () =>
    <div className="app">
    <Header />
    <BrowserRouter>

        <Route exact path="/" component={Home}>Home</Route>
        <Route component={FourOhFour} />

    </BrowserRouter>
    </div>;


export default App;
