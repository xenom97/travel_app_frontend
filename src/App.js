import React, { useState } from "react";
import "./App.css";
import { POST } from "./helper/api";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    const userData = {
      username,
      password,
    };
    const res = await POST("/admins/login", userData);
    console.log(res);
  };

  return (
    <div className="App">
      <label>Username: </label>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>Password: </label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={loginHandler}>LOGIN</button>
    </div>
  );
}

export default App;
