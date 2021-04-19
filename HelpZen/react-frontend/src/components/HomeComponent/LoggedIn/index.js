import React, { useState } from "react";

import NavBar from "../../NavBar";
import Footer from "../../Footer";

import SelectionScreen from "./SelectionScreen";

import "./styles.css";

function LoggedIn({ user, userLogoutHandler }) {
  const [userStatus, setUserStatus] = useState("helpee");

  const handleUserStatusToggle = () => {
    if (userStatus === "helpee") {
      setUserStatus("helper");
    } else {
      setUserStatus("helpee");
    }
  };

  console.log("User Status Is", userStatus);
  return (
    <div className="home--loggedIn--container">
      <NavBar
        user={user}
        handleUserStatusToggle={handleUserStatusToggle}
        userLogoutHandler={userLogoutHandler}
      />
      <div className="home--loggedIn--container--selectionScreen">
        <SelectionScreen userStatus={userStatus} user={user} />
      </div>
      <Footer user={user} userLogoutHandler={userLogoutHandler} />
    </div>
  );
}

export default LoggedIn;
