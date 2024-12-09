import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminDashBoard = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/incidents");
        setIncidents(response.data);
      } catch (error) {
        console.error("There was an error fetching incidents!", error);
      }
    };

    fetchIncidents();
  }, []);

  const resolveIncident = async (id) => {
    try {
      await axios.patch(`http://localhost:8080/incidents/${id}`, {
        status: "Resolved",
      });
      setIncidents(
        incidents.map((incident) =>
          incident.id === id ? { ...incident, status: "Resolved" } : incident
        )
      );
    } catch (error) {
      console.error("There was an error resolving the incident!", error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>Token: </strong> {incident.token} -{" "}
            <strong>Status: </strong> {incident.status} <br />
            <strong>Incident Type: </strong> {incident.incidentType} <br />
            <strong>Email: </strong> {incident.email} <br />
            <strong>Phone Number: </strong> {incident.phoneNumber} <br />
            {incident.status === "Pending" && (
              <button onClick={() => resolveIncident(incident.id)}>
                Resolve
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashBoard;
