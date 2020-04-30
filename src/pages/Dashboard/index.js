import React, { Fragment } from "react";
import { Sidebar, Content } from "../../components";
import { Route, Switch } from "react-router";
import Login from "../Login";
import Home from "../Home";
import Destination from "../Destination";

const menuItems = [
  {
    name: "home",
    label: "Home",
    icon: "user-alt",
    path: "/",
    exact: true,
    page: Home,
  },
  {
    name: "destination",
    label: "Destination",
    icon: "map-marked-alt",
    path: "/destionation",
    exact: false,
    page: Destination,
  },
  {
    name: "logout",
    label: "Logout",
    icon: "sign-out-alt",
    path: "/login",
    exact: false,
    page: Login,
  },
];

function Dashboard() {
  return (
    <Fragment>
      <Sidebar items={menuItems} />
      <Content>
        <Switch>
          {menuItems.map((item, index) => (
            <Route
              component={item.page}
              path={item.path}
              exact={item.exact}
              key={index}
            />
          ))}
        </Switch>
      </Content>
    </Fragment>
  );
}

export default Dashboard;
