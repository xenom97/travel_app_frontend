import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { darkTheme, lightTheme } from "./theme";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        {/* test */}
        <button onClick={() => setDarkMode(!darkMode)}>TEST DARK MODE</button>
        <Switch>
          <Route component={Login} exact path="/" />
          <Route component={Home} path="/home" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
export default App;
