import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:8080/users");
      const admin = response.data.find(
        (user) => user.username === username && user.password === password
      );
      if (admin) {
        navigate('/admin-dashboard');
      } else {
        alert('Invalid Credentials');
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
    }
  };
  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
