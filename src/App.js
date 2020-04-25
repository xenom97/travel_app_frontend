import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={Login} exact path="/" />
          <Route component={Home} path="/home" />
        </Switch>
      </Router>
    );
  }
}

export default App;
