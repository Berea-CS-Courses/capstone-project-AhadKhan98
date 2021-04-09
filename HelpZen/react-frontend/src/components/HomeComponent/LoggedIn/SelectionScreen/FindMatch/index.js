import React, { useState, useEffect } from "react";

import { LinearProgress } from "@material-ui/core";

import "./styles.css";

function FindMatch({ updateScreenAndUpdateState }) {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [matchFound, setMatchFound] = useState(false);

  const findMatch = () => {
    setTimeout(() => {
      setMatchFound(true);
      updateScreenAndUpdateState();
    }, 10000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed((secondsElapsed) => secondsElapsed + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    findMatch();
  }, []);

  return (
    <div className="findmatch--container">
      {!matchFound ? (
        <>
          <h4 className="findmatch--title">
            Please wait while we find a match for you.
          </h4>
          <LinearProgress />
          <h3 className="findmatch--secondsText">
            Seconds Elapsed: {secondsElapsed}s
          </h3>
        </>
      ) : (
        <>Match found. Redirecting</>
      )}
    </div>
  );
}

export default FindMatch;
