import React from "react";
import LoggedIn from "../components/HomeComponent/LoggedIn";
import LoggedOut from "../components/HomeComponent/LoggedOut";

function HomeView({ user }) {
  let componentToRender = null;
  if (user) {
    componentToRender = <LoggedIn user={user} />;
  } else {
    componentToRender = <LoggedOut user={user} />;
  }
  return componentToRender;
}

export default HomeView;
