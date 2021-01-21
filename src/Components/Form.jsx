import React, { useState } from "react";
import Svg from "./Svg";
import ErrorPara from "./ErrorPara";
function Form() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
    password: ""
  });
  const [showErr, setShowErr] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function handleClick(event) {
    if (
      contact.fName.length === 0 ||
      contact.lName.length === 0 ||
      contact.email.length === 0 ||
      contact.password.length === 0
    ) {
      setShowErr(true);
    }

    event.preventDefault();
  }
  return (
    <div className="right-bottom-div">
      <form>
        <input
          style={{
            border:
              showErr &&
              contact.fName.length === 0 &&
              "1.5px solid hsl(0, 100%, 74%)"
          }}
          className="input-field"
          type="text"
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder={showErr ? null : "First Name"}
        />
        {showErr && contact.fName.length === 0 && (
          <div className="input-control">
            <Svg />
            <ErrorPara content="First Name cannot be empty" />
          </div>
        )}
        <input
          style={{
            border:
              showErr &&
              contact.lName.length === 0 &&
              "1.5px solid hsl(0, 100%, 74%)"
          }}
          className="input-field"
          type="text"
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder={showErr ? null : "Last Name"}
        />
        {showErr && contact.lName.length === 0 && (
          <div className="input-control">
            <Svg />
            <ErrorPara content="Last Name cannot be empty" />
          </div>
        )}
        <input
          style={{
            border:
              showErr &&
              contact.email.length === 0 &&
              "1.5px solid hsl(0, 100%, 74%)"
          }}
          className="input-field"
          type="email"
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder={showErr ? null : "Email Address"}
        />
        {showErr && contact.email.length === 0 && (
          <div className="input-control">
            <Svg />
            <ErrorPara content="Looks like this is not an email" />
          </div>
        )}
        <input
          style={{
            border:
              showErr &&
              contact.password.length === 0 &&
              "1.5px solid hsl(0, 100%, 74%)"
          }}
          className="input-field"
          type="password"
          onChange={handleChange}
          name="password"
          value={contact.password}
          placeholder={showErr ? null : "Password"}
        />
        {showErr && contact.password.length === 0 && (
          <div className="input-control">
            <Svg />
            <ErrorPara content="Password cannot be empty" />
          </div>
        )}
        <button className="buttom-btn" onClick={handleClick}>
          CLAIM YOUR FREE TRIAL
        </button>
      </form>
      <footer>
        <span>By clicking the button, you are agreeing to our </span>
        <strong> Terms and Services</strong>
      </footer>
    </div>
  );
}
export default Form;
