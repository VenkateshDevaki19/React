import React from "react";

const Form = () => {
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
      </form>
    </div>
  );
};

export default Form;
