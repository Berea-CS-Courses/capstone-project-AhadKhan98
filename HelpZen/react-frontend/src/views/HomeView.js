/**
 * Renders the appropriate component based on user status
 * Renders LoggedIn component if user exists
 * Renders LoggedOut component if user does not exist 
 */
import React from "react";
import LoggedIn from "../components/HomeComponent/LoggedIn";
import LoggedOut from "../components/HomeComponent/LoggedOut";

function HomeView({ user, userLoginHandler, userLogoutHandler }) {
  let componentToRender = null;
  if (user) {
    // Set componentToRender to be LoggedIn component if user exists
    componentToRender = (
      <LoggedIn user={user} userLogoutHandler={userLogoutHandler} />
    );
  } else {
    componentToRender = (
      // Set componentToRender to be LoggedOut component if user does not exist
      <LoggedOut user={user} userLoginHandler={userLoginHandler} />
    );
  }
  return componentToRender;
}

export default HomeView;
