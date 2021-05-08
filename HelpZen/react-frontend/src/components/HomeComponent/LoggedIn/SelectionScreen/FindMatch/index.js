/**
 * Calls the API to find a match
 * Displays loading screen until a match has been found
 * Displays error if no match found
 */
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { LinearProgress } from "@material-ui/core";

import { addMatchQueryToDb, findMatchForId } from "../../../../../api/";

import "./styles.css";

function FindMatch({ user, matchQuery }) {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [currentMatchQuery, setCurrentMatchQuery] = useState(false);
  const [matchFound, setMatchFound] = useState(false);

  // Updates the secondsElapsed in state every second
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed((secondsElapsed) => secondsElapsed + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Adds the matchQuery in state to the db and finds a match using API
  useEffect(() => {
    const addMatchToDbAsync = async () => {
      const currentMatchObject = await addMatchQueryToDb(matchQuery);
      setCurrentMatchQuery(currentMatchObject.data);
      return currentMatchObject.data;
    };

    let interval = null;

    addMatchToDbAsync().then((currentMatchObject) => {
      interval = setInterval(() => {
        console.log("Trying to find match..");
        findMatchForId({ matchId: currentMatchObject._id }).then((response) => {
          if (response.data) {
            console.log("Found Match");
            clearInterval(interval);
            setMatchFound(response.data);
          }
        });
      }, 5000);
    });
    return () => clearInterval(interval);
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
          <Redirect
            to={{
              pathname: `/chat/${
                currentMatchQuery.userStatus === "helpee"
                  ? currentMatchQuery.userId
                  : matchFound.userId
              }/${
                currentMatchQuery.userStatus === "helper"
                  ? currentMatchQuery.userId
                  : matchFound.userId
              }`,
              userObject: { user },
              session: { currentMatchQuery, matchFound },
            }}
          />
        </>
      )}
    </div>
  );
}

export default FindMatch;
