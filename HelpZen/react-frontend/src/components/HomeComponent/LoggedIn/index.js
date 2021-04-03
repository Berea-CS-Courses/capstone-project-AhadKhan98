import React, { useState } from "react";

import NavBar from "../../NavBar";
import Footer from "../../Footer";

import "./styles.css";

function LoggedIn({ user }) {
  const [userStatus, setUserStatus] = useState("helpee");

  const handleUserStatusToggle = () => {
    if (userStatus === "helpee") {
      setUserStatus("helper");
    } else {
      setUserStatus("helpee");
    }
  };

  const renderSelectionScreen = () => {
    if (userStatus === "helpee") {
      return <h1>User is looking for help!</h1>;
    } else {
      return <h1>User is looking to help!</h1>;
    }
  };

  console.log("User Status Is", userStatus);
  return (
    <div className="home--loggedIn--container">
      <NavBar user={user} handleUserStatusToggle={handleUserStatusToggle} />
      <div className="home--loggedIn--container--selectionScreen">
        {renderSelectionScreen()}
      </div>
      <Footer user={user} />
    </div>
  );
}

export default LoggedIn;
