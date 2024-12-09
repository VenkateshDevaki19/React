import React, { useState } from "react";
import axios from "axios";

const UserRegister = () => {
  const [incident, setIncident] = useState("");
  const [token, setToken] = useState("");
  const [incidentType, setIncidentType] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!incidentType || !email || !phoneNumber || !incident) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/incidents", {
        incident,
        incidentType,
        email,
        phoneNumber,
        status: "Pending",
        token: Math.floor(Math.random() * 10000) + 1,
      });
      setToken(response.data.token);
      alert(
        `Incident registered successfully. your token is ${response.data.token}`
      );

      // Reset fields after successful registration
      setIncident("");
      setIncidentType("");
      setEmail("");
      setPhoneNumber("");
    } catch (error) {
      console.error("There was an error registering the incident", error);
    }
  };

  return (
    <div>
      <h2>User Incident Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Incident Description: </label>
        <input
          type="text"
          value={incident}
          onChange={(e) => setIncident(e.target.value)}
          required
        />
        <br />
        <label>
          Incident Type:
          <select
            value={incidentType}
            onChange={(e) => setIncidentType(e.target.value)}
            required
          >
            <option value="">Select Type</option>
            <option value="Technical">Technical</option>
            <option value="AppLogin">App login issue</option>
            <option value="LaptopIssue">Laptop issue</option>
          </select>
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <br />

        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Register Incident</button>
      </form>
      {token && <p>Your Incident token is: {token}</p>}
    </div>
  );
};

export default UserRegister;
