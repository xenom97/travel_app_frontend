import React, { Fragment } from "react";
import { Sidebar, Content, Navbar, Padding, Button } from "../../components";
import { Route, Switch, useHistory } from "react-router";
import { authLogout } from "../../store/actions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import menuItems from "./menu";
import AddDestination from "../Destination/Create";
import EditDestination from "../Destination/Edit";

function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();

  const logOutHandler = () => {
    dispatch(authLogout());
    history.push("/login");
  };

  return (
    <Fragment>
      <Sidebar items={menuItems} title="Travel Dashboard" />
      <Navbar>
        <Padding>
          <Button primary onClick={logOutHandler}>
            SIGN OUT <FontAwesomeIcon icon="sign-out-alt" color="#fff" />
          </Button>
        </Padding>
      </Navbar>
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
          <Route component={AddDestination} path={"/destination/create"} />
          <Route component={EditDestination} path={"/destination/edit/:id"} />
        </Switch>
      </Content>
    </Fragment>
  );
}

export default Dashboard;
