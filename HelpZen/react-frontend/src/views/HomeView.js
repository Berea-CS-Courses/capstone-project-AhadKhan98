/**
 * Renders the appropriate component based on user status
 * Renders LoggedIn component if user exists
 * Renders LoggedOut component if user does not exist
 */
import React from "react";
import { Redirect } from "react-router-dom";
import LoggedIn from "../components/HomeComponent/LoggedIn";
import LoggedOut from "../components/HomeComponent/LoggedOut";
import { modifySessionForUser } from "../api";

function HomeView({ user, userLoginHandler, userLogoutHandler }) {
  let componentToRender = null;
  if (user) {
    if (user.activeSession?.status === "active") {
      componentToRender = (
        <Redirect
          to={{
            pathname: `/chat/${user.activeSession.roomNumber}`,
            userObject: { user },
            session: {
              currentMatchQuery: user.activeSession.currentMatchQuery,
              matchFound: user.activeSession.matchFound,
            },
          }}
        />
      );
      console.log("USER HAS AN ACTIVE SESSION");
    } else if (user.activeSession?.status === "pending") {
      componentToRender = (
        <>
          <h1>User leaves a review on this page</h1>
          <button
            onClick={() => {
              modifySessionForUser({ userId: user._id }).then((res) => {
                window.location.replace("/");
              });
            }}
          >
            Complete Review
          </button>
        </>
      );
    } else {
      console.log("USER DOES NOT HAVE AN ACTIVE SESSION");
      componentToRender = (
        <LoggedIn user={user} userLogoutHandler={userLogoutHandler} />
      );
    }
    // Set componentToRender to be LoggedIn component if user exists
  } else {
    componentToRender = (
      // Set componentToRender to be LoggedOut component if user does not exist
      <LoggedOut user={user} userLoginHandler={userLoginHandler} />
    );
  }
  return componentToRender;
}

export default HomeView;
