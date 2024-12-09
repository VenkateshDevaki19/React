import React, { useRef, useState } from "react";
import "./Form.css";
import ShowFormData from "./ShowFormData";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    country: "",
    avatar: "",
    birthDate: "",
    marriageStatus: false,
    gender: "",
  });

  const [showData, setShowData] = useState(false);

  const avatarRef = useRef(null);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const avatarFile = avatarRef.current.files[0];

    setFormData((prevData) => ({
      ...prevData,
      avatar: avatarFile ? avatarFile.name : "",
    }));

    setShowData(true);
  };

  return (
    <div className="form-container">
      <h1>React Form Submission</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="LastName">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="Email">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="phone number">
          Phone number:
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>

        <label>
          Birth date:
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </label>

        <label>
          Country:
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="india">India</option>
            <option value="canada">Canada</option>
            <option value="france">France</option>
            <option value="germany">Germany</option>
            <option value="japan">Japan</option>
            <option value="spain">Spain</option>
          </select>
        </label>

        <label>
          Avatar:
          <input type="file" name="avatar" ref={avatarRef} />
        </label>

        <label>
          Married Status:
          <input
            type="checkbox"
            name="marriageStatus"
            value={formData.marriageStatus}
            onChange={handleChange}
          />
        </label>

        <div>
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />{" "}
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={handleChange}
            />{" "}
            Other
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {showData ? (
        <ShowFormData formData={formData} />
      ) : (
        <p>Please fill out the form and submit.</p>
      )}
    </div>
  );
};

export default Form;
