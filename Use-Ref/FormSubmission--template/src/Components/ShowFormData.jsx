import React from 'react'
import "./ShowFormData.css";

const ShowFormData = ({formData}) => {
  return (
    <div className="data-container">
      <h2>Submitted Data</h2>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone Number:</strong> {formData.phNumber}</p>
      <p><strong>Country:</strong> {formData.country}</p>
      <p><strong>Birth Date:</strong> {formData.birthDate}</p>
      <p><strong>Married Status:</strong> {formData.marriageStatus ? "Yes" : "No"}</p>
      <p><strong>Gender:</strong> {formData.gender}</p>
      <p><strong>Avatar:</strong> {formData.avatar}</p>
    </div>
  )
}

export default ShowFormData;
