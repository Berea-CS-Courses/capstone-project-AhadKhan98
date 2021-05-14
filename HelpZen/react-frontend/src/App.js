/**
 * Component responsible for core functionality of the App
 * Handles dynamic displaying of all other components
 * Routes paths to appropriate components
 */

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeView from "./views/HomeView";
import ChatView from "./views/ChatView";
import HelperStatsView from "./views/HelperStatsView";
import EditProfileView from "./views/EditProfileView.js";

import { getUserById } from "./api";

function App() {
  const [user, setUser] = useState(null); // Initialize user to be null on app start

  // Checks if userid exists in localStorage and logs user in automatically. Runs once when component loads.
  useEffect(() => {
    if (window.localStorage.getItem("userid")) {
      const userId = window.localStorage.getItem("userid");
      getUserById(userId).then((result) => {
        if (result?.data) {
          setUser(result.data);
        } else {
          window.localStorage.removeItem("userid");
        }
      });
    }
  }, []);

  // Stores the userid in localstorage to auto login later
  const userLoginHandler = (authUser) => {
    window.localStorage.setItem("userid", authUser._id);
    setUser(authUser);
  };

  // Removes userid from localstorage to prevent auto login
  const userLogoutHandler = () => {
    window.localStorage.removeItem("userid");
    setUser(null);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeView
            user={user}
            userLoginHandler={userLoginHandler}
            userLogoutHandler={userLogoutHandler}
          />
        </Route>
        <Route
          path="/chat/:helpeeId/:helperId"
          render={(props) => <ChatView {...props} />}
        />
        <Route path="/helper-stats">
          <HelperStatsView user={user} userLogoutHandler={userLogoutHandler} />
        </Route>
      </Switch>
      <Route path="/edit-profile">
        <EditProfileView user={user} userLogoutHandler={userLogoutHandler} />
      </Route>
    </Router>
  );
}

export default App;
