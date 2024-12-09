import React from "react";
import UserRegister from "./Components/UserRegister";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./Components/AdminLogin";
import AdminDashBoard from "./Components/AdminDashBoard";

const App = () => {
  return <Router>
    <div>
      <h1>Incident Registration</h1>
      <Routes>
        <Route path="/register" element={< UserRegister />} />
        <Route path="/admin-login" element={< AdminLogin />} />
        <Route path="/admin-dashboard" element={< AdminDashBoard />} />
      </Routes>
    </div>
  </Router>;
};

export default App;
