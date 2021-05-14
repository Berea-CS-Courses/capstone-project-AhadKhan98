import React, { useState } from "react";

import NavBar from "../../../NavBar";
import Footer from "../../../Footer";

import { TextField, Button } from "@material-ui/core";

import { updateUser } from "../../../../api";

import "./styles.css";

function EditProfile({ user, userLogoutHandler }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  if (!user) {
    window.location.replace("/"); // Redirect to homepage if user is not logged in
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const submitForm = () => {
    updateUser(user._id, formData).then(() => {
      window.location.replace("/");
    });
  };

  return (
    <div className="editProfile--conatiner">
      <NavBar user={user} screen={true} userLogoutHandler={userLogoutHandler} />
      <div className="editProfile-content">
        <div className="editProfile-formContainer">
          <h3>Make changes to your profile</h3>
          <div className="editProfile-namefields">
            <TextField
              id="firstName"
              onChange={handleInputChange}
              className="editProfile-textfield"
              label="First Name"
              placeholder={user.firstName}
              value={formData.firstName}
              variant="filled"
            ></TextField>
            <TextField
              id="lastName"
              onChange={handleInputChange}
              className="editProfile-textfield"
              placeholder={user.lastName}
              label="Last Name"
              value={formData.lastName}
              variant="filled"
            ></TextField>
          </div>
          <TextField
            id="email"
            onChange={handleInputChange}
            className="editProfile-emailfield"
            label="Email address"
            value={formData.email}
            placeholder={user.email}
            variant="filled"
          ></TextField>
          <TextField
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            type="password"
            className="editProfile-passwordfield"
            label="Password (blank to leave unchanged"
            variant="filled"
          ></TextField>
          <Button
            onClick={submitForm}
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
