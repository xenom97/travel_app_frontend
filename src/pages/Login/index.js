import React, { useState } from "react";
import { Button, Card, Input, Text, Padding } from "../../components";
import { authLogin } from "../../service/auth.api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    authLogin({ username, password });
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#eaeaea",
      }}
    >
      <Card
        width="350"
        center
        header={require("../../assets/images/header.jpg")}
      >
        <Padding top="20">
          <Text primary uppercase bold size="18">
            Admin Login
          </Text>
        </Padding>
        <Padding>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
            type="text"
            icon="user"
          />
        </Padding>
        <Padding>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            type="password"
            icon="lock"
          />
        </Padding>
        <Padding bottom="20">
          <Button primary onClick={loginHandler}>
            Login
          </Button>
        </Padding>
      </Card>
    </div>
  );
}

export default Login;
