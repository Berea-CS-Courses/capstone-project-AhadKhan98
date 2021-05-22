/**
 * Displays modal used to log in to the app
 * Makes request to the API to log users in using the form data
 */
import React, { useState } from "react";
import { Modal, Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "./styles.css";

import { loginUser } from "../../../api"; // API request to log user in

function LoginModal({ open, handleToggle, userLoginHandler }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  // Updates formData in state every time a field is changed
  const handleFormInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Verifies that the formData is correct and calls API to log the user in
  const handleLoginButtonClick = () => {
    if (formData.email && formData.password) {
      // Checks for complete fields
      loginUser(formData).then((response) => {
        if (response.data) {
          userLoginHandler(response.data); // Updates user object if a user was returned
        } else {
          setErrorMessage("Invalid credentials."); // Display error message since the user could not be logged in
        }
      });
    } else {
      setErrorMessage("Please fill out all the fields."); // Displays error message since form had incomplete data
    }
  };

  return (
    <div>
      <Modal
        className="loginModal"
        open={open}
        onClose={handleToggle}
        aria-labelledby="Login"
        aria-describedby="Please sign in using the form below."
      >
        <div className="loginModal--body">
          <h2>Login</h2>
          <form>
            <TextField
              onChange={handleFormInputChange}
              id="email"
              label="Email"
            />
            <TextField
              onChange={handleFormInputChange}
              type="password"
              id="password"
              label="Password"
            />
            <Button
              onClick={handleLoginButtonClick}
              color="primary"
              variant="contained"
            >
              Login
            </Button>
            <Typography variant="body2" className="loginModal--error-text">
              {errorMessage}
            </Typography>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default LoginModal;
