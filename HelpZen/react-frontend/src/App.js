import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeView from "./views/HomeView";
import ChatView from "./views/ChatView";
import HelperStatsView from "./views/HelperStatsView";

import { getUserById } from "./api";

function App() {
  const [user, setUser] = useState(null);

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

  const userLoginHandler = (authUser) => {
    window.localStorage.setItem("userid", authUser._id);
    setUser(authUser);
  };

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
        <Route path="/chat">
          <ChatView />
        </Route>
        <Route path="/helper-stats">
          <HelperStatsView user={user} userLogoutHandler={userLogoutHandler} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
