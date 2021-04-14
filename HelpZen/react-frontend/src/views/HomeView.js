import React from "react";
import LoggedIn from "../components/HomeComponent/LoggedIn";
import LoggedOut from "../components/HomeComponent/LoggedOut";

function HomeView({ user, userLoginHandler, userLogoutHandler }) {
  let componentToRender = null;
  if (user) {
    componentToRender = (
      <LoggedIn user={user} userLogoutHandler={userLogoutHandler} />
    );
  } else {
    componentToRender = (
      <LoggedOut user={user} userLoginHandler={userLoginHandler} />
    );
  }
  return componentToRender;
}

export default HomeView;
