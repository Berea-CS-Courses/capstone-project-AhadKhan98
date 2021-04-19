import React, { useState } from "react";

import "./styles.css";

import NavBar from "../../NavBar";
import Footer from "../../Footer";

import BlockOne from "./BlockOne";
import BlockTwo from "./BlockTwo";
import BlockThree from "./BlockThree";

import LoginModal from "../../Modals/LoginModal";
import RegisterModal from "../../Modals/RegisterModal";

function LoggedOut({ user, userLoginHandler }) {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const handleLoginModalToggle = () => {
    setLoginModalOpen(!loginModalOpen);
  };

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
        <BlockThree />
        <Footer />
      </div>
    </div>
  );
}

export default LoggedOut;
