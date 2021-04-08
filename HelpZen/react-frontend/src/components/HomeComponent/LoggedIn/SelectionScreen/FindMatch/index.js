import React, { useState, useEffect } from "react";

import { LinearProgress } from "@material-ui/core";

import "./styles.css";

function FindMatch({ updateScreenAndUpdateState }) {
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  const handleMatchFound = () => {
    updateScreenAndUpdateState({});
  };

  useEffect(() => {
    setTimeout(() => {
      setSecondsElapsed(secondsElapsed + 1);
    }, 1000);
  }, [secondsElapsed]);

  if (secondsElapsed === 10) {
    handleMatchFound();
  }

  return (
    <div className="findmatch--container">
      <h4 className="findmatch--title">
        Please wait while we find a match for you.
      </h4>
      <LinearProgress />
      <h3 className="findmatch--secondsText">
        Seconds Elapsed: {secondsElapsed}s
      </h3>
    </div>
  );
}

export default FindMatch;
