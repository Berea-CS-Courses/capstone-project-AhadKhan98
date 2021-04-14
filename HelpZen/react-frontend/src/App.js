import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeView from "./views/HomeView";
import ChatView from "./views/ChatView";
import HelperStatsView from "./views/HelperStatsView";

function App() {
  const [user] = useState({ firstName: "Ahad", lastName: "Zai" });

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeView user={user} />
        </Route>
        <Route path="/chat">
          <ChatView />
        </Route>
        <Route path="/helper-stats">
          <HelperStatsView user={user} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
