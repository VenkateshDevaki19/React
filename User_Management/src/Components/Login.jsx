import React from "react";
import { useContext } from "react";
import AuthContext from "../AuthProvider";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    const userData = { username };
    login(userData);
    history.push("/profile");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
