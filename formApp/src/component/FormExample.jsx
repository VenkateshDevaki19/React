import React, { useState } from "react";

let initialValue = {
  userName: "",
  country: "",
  isMarried: "No",
  favColors: [
    { color: "Red", checked: false },
    { color: "Green", checked: false },
    { color: "Blue", checked: false },
  ],
};

const FormExample = () => {
  const [formState, setFormState] = useState(initialValue);

  const handleChange = (event) => {
    // console.log(event.target);
    // const { name, value } = event.target; //destructuring name and value from event.target
    // console.log(name, value);
    // setFormState({ ...formState, [name]: value });

    const { name, value, type, checked } = event.target; //destructuring name and value from event.target

    //handle checkbox changes
    if (type === "checkbox") {
        const updatedColors = formState.favColors.map((colorObj) => 
            colorObj.color === value ? { ...colorObj, checked: checked } : colorObj
        ); // Use parentheses instead of curly braces to directly return the result          
      setFormState({ ...formState, favColors: updatedColors });
    } else {
      //Handle other input changes
      setFormState({ ...formState, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    setFormState(initialValue); //resetting the formState to initial value after submission
  };
  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          placeholder="type username"
          onChange={handleChange}
          name="userName"
          value={formState.userName}
        />

<br />
        <select
          name="country"
          id=""
          onChange={handleChange}
          value={formState.country}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Japan">Japan</option>
        </select>

        <br />

        <label htmlFor="">
          is Married:
          <input
            type="radio"
            value="Yes"
            onChange={handleChange}
            name="isMarried"
            checked={formState.isMarried === "Yes"}
          />
          Yes
        </label>

        <label htmlFor="">
          <input
            type="radio"
            value="No"
            onChange={handleChange}
            name="isMarried"
            checked={formState.isMarried === "No"}
          />
          No
        </label>

        {/* <br />
        <label htmlFor="">Colors: 
            <input type="checkbox" name="favColors" id="" onChange={handleChange} /> Red
            <input type="checkbox" name="favColors" id="" onChange={handleChange} /> Green
            <input type="checkbox" name="favColors" id="" onChange={handleChange} /> Blue
        </label>
        <br /> */}
        <br />

        <label>Colors:</label>
        {formState.favColors.map((colorObj) => (
          <span key={colorObj.color}>
            <input
              type="checkbox"
              onChange={handleChange}
              value={colorObj.color}
              checked={colorObj.checked}
            />{colorObj.color}
          </span>
        ))}

        <br />
        <input type="Submit" />
      </form>
    </div>
  );
};

export default FormExample;
