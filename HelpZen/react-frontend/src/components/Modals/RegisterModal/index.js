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

  const handleFormInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

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
            userLoginHandler(response.data);
          } else {
            setErrorMessage("A user with that email already exists.");
          }
        })
        .catch((err) => {
          console.log("Error occurred!");
          setErrorMessage("An unexpected error occurred.");
        });
    } else {
      setErrorMessage("Please make sure all fields have been entered.");
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
