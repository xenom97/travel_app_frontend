import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { darkTheme, lightTheme } from "./theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import "./App.css";

library.add(faUser, faLock);

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        {token ? <Home /> : <Login />}
        {/* // <Switch>
        //   <Route component={Login} exact path="/" />
        //   <Route component={Home} path="/home" />
        // </Switch> */}
      </Router>
    </ThemeProvider>
  );
}
export default App;
