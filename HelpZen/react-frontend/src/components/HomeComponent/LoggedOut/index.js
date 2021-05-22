/**
 * Displays a UI for users that are not logged in to the app
 */
import React, { useState } from "react";

import "./styles.css";

import NavBar from "../../NavBar";
import Footer from "../../Footer";

import BlockOne from "./BlockOne";
import BlockTwo from "./BlockTwo";

import LoginModal from "../../Modals/LoginModal";
import RegisterModal from "../../Modals/RegisterModal";

function LoggedOut({ user, userLoginHandler }) {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  // Toggles display of Login Modal
  const handleLoginModalToggle = () => {
    setLoginModalOpen(!loginModalOpen);
  };

  // Toggles display of Register Modal
  const handleRegisterModalToggle = () => {
    setRegisterModalOpen(!registerModalOpen);
  };

  return (
    <div className="home--loggedOut">
      <LoginModal
        userLoginHandler={userLoginHandler}
        open={loginModalOpen}
        handleToggle={handleLoginModalToggle}
      />
      <RegisterModal
        userLoginHandler={userLoginHandler}
        open={registerModalOpen}
        handleToggle={handleRegisterModalToggle}
      />

      <NavBar
        user={user}
        loginModalHandler={handleLoginModalToggle}
        registerModalHandler={handleRegisterModalToggle}
      />
      <div className="home--loggedOut--contentArea">
        <BlockOne />
        <BlockTwo handleRegisterModalToggle={handleRegisterModalToggle} />
        <Footer />
      </div>
    </div>
  );
}

export default LoggedOut;
