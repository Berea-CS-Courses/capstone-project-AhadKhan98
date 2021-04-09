import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeView from "./views/HomeView";

function App() {
  const [user] = useState({ firstName: "Ahad" });

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeView user={user} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
