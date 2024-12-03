import React, { useRef, useState } from "react";

const Form = () => {

  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    phoneNumber:"",
    country:"",
    avatar:"",
    birthDate:"",
    marriageStatus: false,
    gender:"",
  });


  const [showData, setShowData] = useState(false);

  const avatarRef = useRef(null);

  const handleChange = (e) => {
    const {name, type, value, checked} = e.target;

    setFormData({
      ...formData, [name]: type === "checkbox" ? checked:value,
    });
  }; 

  return (
    <div>
      <form action="post">
        <label htmlFor="firstName">
          First Name:
          <input type="text" />
        </label>

        <label htmlFor="LastName">
          Last Name:
          <input type="text" />
        </label>

        <label htmlFor="Email">
          Email:
          <input type="email" />
        </label>

        <label htmlFor="Password">
          Password:
          <input type="text" />
        </label>

        <label htmlFor="phone number">
          Phone number:
          <input type="text" />
        </label>

        <label htmlFor="Birth date">
          Birth date:
          <input type="text" />
        </label>

        <label htmlFor="firstName">
          Country:
          <select name="country">
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

        <label htmlFor="firstName">
          Avatar:
          <input type="file" />
        </label>

        <label htmlFor="">
          Married Status:
          <input type="checkbox" />
        </label>

        <div>
            Gender:
            <label>
              <input type="radio" name="gender" value="Male" />Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" />Female
            </label>
            <label>
              <input type="radio" name="gender" value="Other" />Other
            </label>
          </div>

          <button type="submit">Submit</button>
      </form>

      {showdata ?(
        <showFormData formData={formdata} /> 
      ): (
        <p>Please fill out the form and submit</p>
      )}
    </div>
  );
};

export default Form;
