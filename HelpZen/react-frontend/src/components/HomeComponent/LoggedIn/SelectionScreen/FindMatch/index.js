import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { LinearProgress } from "@material-ui/core";

import { addMatchQueryToDb } from "../../../../../api/";

import "./styles.css";

function FindMatch({ updateScreenAndUpdateState, matchQuery }) {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [matchFound, setMatchFound] = useState(false);

  // const findMatch = () => {
  //   setTimeout(() => {
  //     setMatchFound(true);
  //   }, 10000);
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed((secondsElapsed) => secondsElapsed + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    addMatchQueryToDb(matchQuery).then((res) => {
      console.log("RESULT", res);
    });
    // findMatch();
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
        <>
          <Redirect to="/chat" />
        </>
      )}
    </div>
  );
}

export default FindMatch;
