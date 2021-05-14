import React from "react";

import NavBar from "../../../NavBar";
import Footer from "../../../Footer";

import { TextField, Button } from "@material-ui/core";

import "./styles.css";

function EditProfile({ user, userLogoutHandler }) {
  if (!user) {
    window.location.replace("/"); // Redirect to homepage if user is not logged in
  }
  return (
    <div className="editProfile--conatiner">
      <NavBar user={user} screen={true} userLogoutHandler={userLogoutHandler} />
      <div className="editProfile-content">
        <div className="editProfile-formContainer">
          <h3>Make changes to your profile</h3>
          <div className="editProfile-namefields">
            <TextField
              className="editProfile-textfield"
              label="First Name"
              placeholder="Hex"
              variant="filled"
            ></TextField>
            <TextField
              className="editProfile-textfield"
              label="Last Name"
              variant="filled"
            ></TextField>
          </div>
          <TextField
            className="editProfile-emailfield"
            label="Email address"
            variant="filled"
          ></TextField>
          <TextField
            className="editProfile-passwordfield"
            label="Password (blank to leave unchanged"
            variant="filled"
          ></TextField>
          <Button
            className="editProfile-updatebutton"
            variant="contained"
            color="primary"
          >
            Update Profile
          </Button>
        </div>
      </div>
      <Footer user={user} userLogoutHandler={userLogoutHandler} />
    </div>
  );
}

export default EditProfile;
