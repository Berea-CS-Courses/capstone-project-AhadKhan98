import React from "react";
import { Modal, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "./styles.css";

function RegisterModal({ open, handleToggle }) {
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
            <TextField id="firstName" label="First Name" />
            <TextField id="lastName" label="Last Name" />
            <TextField id="email" label="Email" />
            <TextField type="password" id="password" label="Password" />
            <Button color="primary" variant="contained">
              Sign Up
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default RegisterModal;
