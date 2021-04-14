import React from "react";
import { Modal, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "./styles.css";

function LoginModal({ open, handleToggle }) {
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
            <TextField id="email" label="Email" />
            <TextField type="password" id="password" label="Password" />
            <Button color="primary" variant="contained">
              Login
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default LoginModal;
