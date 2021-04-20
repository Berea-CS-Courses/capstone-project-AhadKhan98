/**
 * Calls the API to find a match
 * Displays loading screen until a match has been found
 * Displays error if no match found
 */
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

  // Updates the secondsElapsed in state every second
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed((secondsElapsed) => secondsElapsed + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Adds the matchQuery in state to the db using API
  useEffect(() => {
    addMatchQueryToDb(matchQuery).then((res) => {
      console.log("RESULT", res);
    });
    // TODO: Start finding match
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
