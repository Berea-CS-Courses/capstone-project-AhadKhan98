import React, { useState } from "react";
import { Modal, Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "./styles.css";

import { loginUser } from "../../../api";

function LoginModal({ open, handleToggle, userLoginHandler }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleLoginButtonClick = () => {
    if (formData.email && formData.password) {
      loginUser(formData).then((response) => {
        console.log("RESPONSE", response);
        if (response.data) {
          userLoginHandler(response.data);
        } else {
          setErrorMessage("Invalid credentials.");
        }
      });
    } else {
      setErrorMessage("Please fill out all the fields.");
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
