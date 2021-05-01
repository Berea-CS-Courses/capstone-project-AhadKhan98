/**
 * Displays modal used to register a new user to the app
 * Makes request to the API to sign up users using the form data
 */
import React, { useState } from "react";
import { Modal, Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "./styles.css";

import { registerNewUser } from "../../../api";

function RegisterModal({ open, handleToggle, userLoginHandler }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // Updates formData in state every time a change is made
  const handleFormInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Verifies that the form is complete and registers a new user using the API
  const handleSignupButtonClick = () => {
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.password
    ) {
      registerNewUser(formData)
        .then((response) => {
          if (response.data) {
            userLoginHandler(response.data); // Updates the user in state if a user was created and returned back from the db
          } else {
            setErrorMessage("A user with that email already exists."); // Displays error indicating an existing user with the same email
          }
        })
        .catch((err) => {
          console.log("Error occurred!");
          setErrorMessage("An unexpected error occurred."); // Displays error if database encounters an unexpected error.
        });
    } else {
      setErrorMessage("Please make sure all fields have been entered."); // Displays error if required fields left blank.
    }
  };

  return (
    <div>
      <Modal
        className="registerModal"
        open={open}
        onClose={handleToggle}
        aria-labelledby="Register"
        aria-describedby="Please sign up using the form below."
      >
        <div className="registerModal--body">
          <h2>Register</h2>
          <form>
            <TextField
              onChange={handleFormInputChange}
              id="firstName"
              label="First Name"
            />
            <TextField
              onChange={handleFormInputChange}
              id="lastName"
              label="Last Name"
            />
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
              onClick={handleSignupButtonClick}
              color="primary"
              variant="contained"
            >
              Sign Up
            </Button>
            <Typography className="registerModal--error-text" variant="body2">
              {errorMessage}
            </Typography>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default RegisterModal;
