/**
 * Renders the appropriate component based on user status
 * Renders LoggedIn component if user exists
 * Renders LoggedOut component if user does not exist
 */
import React from "react";
import { Redirect } from "react-router-dom";
import LoggedIn from "../components/HomeComponent/LoggedIn";
import LoggedOut from "../components/HomeComponent/LoggedOut";
import LeaveReview from "../components/HomeComponent/LoggedIn/LeaveReview";

function HomeView({ user, userLoginHandler, userLogoutHandler }) {
  let componentToRender = null; // Determines the component that needs to be rendered

  // Checks if a user is logged in
  if (user) {
    // Checks if the user has an active session
    if (user.activeSession?.status === "active") {
      // If the user has an active session, redirects to the chat component
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
    } else if (user.activeSession?.status === "pending") {
      // If the user needs to leave a review, renders the leave review component
      componentToRender = <LeaveReview user={user} />;
    } else {
      // If the user does not have an active session, renders the LoggedIn component
      componentToRender = (
        <LoggedIn user={user} userLogoutHandler={userLogoutHandler} />
      );
    }
  } else {
    // Set componentToRender to be LoggedOut component if user does not exist
    componentToRender = (
      <LoggedOut user={user} userLoginHandler={userLoginHandler} />
    );
  }
  return componentToRender;
}

export default HomeView;
