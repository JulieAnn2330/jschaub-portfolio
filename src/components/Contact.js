import React, { useState, useEffect } from "react";
import axios from "axios";
import Col from 'react-bootstrap/Col'; 
import {Helmet} from 'react-helmet';
import Image from 'react-bootstrap/Image'; 
import Resume from '../images/Fullsize Images/Julie Schaub Resume.pdf';
import Writing from '../images/Fullsize Images/Technical-Writing-Sample.pdf';
import Keyboard from '../images/computer-keyboard-blue_2.jpg';

export function Contact() {

  /* NEW: validation for inputs vvvv */
  const [fieldErrors, setFieldErrors] = useState({});
  const validationRules = {
    email: val => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: val => !!val
  };
  const validate = () => {
    let errors = {};
    let hasErrors = false;
    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key]);
      hasErrors |= errors[key];
    }
    setFieldErrors(prev => ({ ...prev, ...errors }));
    return !hasErrors;
  };
  const renderFieldError = field => {
    if (fieldErrors[field]) {
      return <p className="errorMsg">Please enter a valid {field}.</p>;
    }
  };
  useEffect(() => {
    // Only perform interactive validation after submit
    if (Object.keys(fieldErrors).length > 0) {
      validate();
    }
  });
  /* End new validation ^^^^ */

  // Input Change Handling
  const [inputs, setInputs] = useState({
    email: "",
    message: ""
  });
  const handleOnChange = event => {
    event.persist();
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }));
  };

  // Server State Handling
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      setFieldErrors({});
      setInputs({
        email: "",
        message: ""
      });
    }
  };
  const handleOnSubmit = event => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    setServerState({ submitting: true });
    axios({
      method: "POST",
      url: "https://formspree.io/xwkryppl",
      data: inputs
    })
      .then(r => {
        handleServerResponse(true, "Thanks!");
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error);
      });
  };

  return (
    <div>
      <Helmet>
         <style>{'body { background-color: slategray; }'}</style>
      </Helmet>
      <Col xs lg="6">
         <ul class="is-bullet">
           <li><b>Email:</b> <a href="mailto:julie.schaub@midtownfullstack.com" target="blank" class="link">julie.schaub@midtownfullstack.com</a></li>
           <li><a class="link" href="https://github.com/JulieAnn2330" target="blank">Link to GitHub Repositories</a></li>
           <li><a class="link" href="https://www.linkedin.com/in/julie-schaub" target="blank">LinkedIn Profile</a></li>
          <li><a class="link" href={ Resume } target="blank">Resume</a></li>
          <li><a class="link" href={ Writing } target="blank">Technical Writing Sample</a></li>
          <li><b>Cell/Text:</b> 913.284.6548</li>
          <li><b>Location:</b> Midtown, Kansas City, MO</li>
        </ul>
        </Col>

      <Col xs lg="6">
         <h1 className="contactLabel">Contact Me</h1>
         <form onSubmit={handleOnSubmit} noValidate>
         <label htmlFor="email" className="emailLabel">Email:</label>
         <input
            id="email"
            type="email"
            name="email"
            onChange={handleOnChange}
            value={inputs.email}
            className={fieldErrors.email ? "error" : ""}
         />
         {renderFieldError("email")}
         <br></br>
         <label htmlFor="message" className="messageLabel">Message:</label>
         <textarea
            id="message"
            name="message"
            onChange={handleOnChange}
            value={inputs.message}
            className={fieldErrors.message ? "error" : ""}
         ></textarea>
         {renderFieldError("message")}
         <br></br>
         <button type="submit" disabled={serverState.submitting} className="button">
            Submit
         </button>
         {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
               {serverState.status.msg}
            </p>
         )}
         </form>
      </Col>
      <Col xs={6} md={4}>
      <Image className="keyboard" src={ Keyboard } />
    </Col>
    </div>
   );
};

export default Contact