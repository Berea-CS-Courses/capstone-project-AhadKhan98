import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeView from "./views/HomeView";
import ChatView from "./views/ChatView";
import HelperStatsView from "./views/HelperStatsView";

function App() {
  const [user, setUser] = useState(null);

  const userLoginHandler = (authUser) => {
    setUser(authUser);
  };

  const userLogoutHandler = () => {
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
