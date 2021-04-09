import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeView from "./views/HomeView";
import ChatView from "./views/ChatView";

function App() {
  const [user] = useState({ firstName: "Ahad" });

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeView user={user} />
        </Route>
        <Route path="/chat">
          <ChatView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
