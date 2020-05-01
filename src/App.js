import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { darkTheme, lightTheme } from "./theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faLock,
  faUserAlt,
  faSignOutAlt,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import "./App.css";

library.add(faUser, faLock, faUserAlt, faSignOutAlt, faMapMarkedAlt);

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <ThemeProvider theme={lightTheme}>
      <Router>{token ? <Dashboard /> : <Login />}</Router>
    </ThemeProvider>
  );
}
export default App;
