import React, { useState } from "react";

import axios from "axios";

function App() {
  const getResponse = () => {
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        alert("Got response from server!");
        setServerMessage(response.data);
      })
      .catch((error) => {
        alert("Failed to get response from server!");
        setServerMessage(error.message);
      });
  };
  const [serverMessage, setServerMessage] = useState("");
  return (
    <div className="app">
      <h2>React frontend running for HelpZen</h2>
      Press button to connect to backend server:{" "}
      <button onClick={getResponse}>Connect</button>
      <p>{serverMessage}</p>
    </div>
  );
}

export default App;
