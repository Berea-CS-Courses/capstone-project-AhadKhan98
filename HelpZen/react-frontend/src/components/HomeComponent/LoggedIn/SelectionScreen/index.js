/* eslint-disable */

/**
 * Renders different components to facilitate the selection process
 */
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./styles.css";

import SelectTechnology from "./SelectTechnology";
import SelectLanguage from "./SelectLanguage";
import InputProblem from "./InputProblem";
import FindMatch from "./FindMatch";

function SelectionScreen({ user, userStatus }) {
  const [helperScreenCount, setHelperScreenCount] = useState(1); // Counter to track progress for helpers
  const [helpeeScreenCount, setHelpeeScreenCount] = useState(1); // Counter to track progress for helpees
  const [matchQuery, setMatchQuery] = useState({
    userStatus,
    userId: user._id,
  }); // Match query the gets update after each selection and gets added to db at the end of selection process

  console.log("MATCH QUERY", matchQuery);

  useEffect(() => {
    // Resets progress every time user status is changed
    if (userStatus === "helpee") {
      setHelperScreenCount(1);
      setMatchQuery({ ...matchQuery, userStatus });
    } else {
      setHelpeeScreenCount(1);
      setMatchQuery({ ...matchQuery, userStatus });
    }
  }, [userStatus]);

  // Renders appropriate component based on progress tracker in state
  const renderSelectionScreen = () => {
    // Stores the selection in state and updates the screen to the next step
    const updateScreenAndUpdateState = (data) => {
      if (userStatus === "helpee") {
        setHelpeeScreenCount(helpeeScreenCount + 1);
      } else {
        setHelperScreenCount(helperScreenCount + 1);
      }
      setMatchQuery({ ...matchQuery, ...data });
    };

    // Renders components based on userStatus and progress tracker
    if (userStatus === "helper") {
      // user is a HELPER
      const renderScreen = () => {
        if (helperScreenCount === 1) {
          return (
            <SelectTechnology
              updateScreenAndUpdateState={updateScreenAndUpdateState}
              userStatus={userStatus}
            />
          );
        } else if (helperScreenCount === 2) {
          return (
            <SelectLanguage
              updateScreenAndUpdateState={updateScreenAndUpdateState}
              userStatus={userStatus}
            />
          );
        } else if (helperScreenCount === 3) {
          return <FindMatch matchQuery={matchQuery} user={user} />;
        } else {
          <Redirect to="/chat" />;
        }
      };
      return (
        <div className="selectionScreen--container--helper">
          <h1 className="selectionScreen--container--heading1">
            Welcome, {user.firstName}!{" "}
          </h1>
          <h3 className="selectionScreen--container--heading2">
            You can start helping others in minutes.
          </h3>
          {renderScreen()}
        </div>
      );
    } else if (userStatus === "helpee") {
      // user is a HELPEE
      const renderScreen = () => {
        if (helpeeScreenCount === 1) {
          return (
            <SelectTechnology
              updateScreenAndUpdateState={updateScreenAndUpdateState}
              userStatus={userStatus}
            />
          );
        } else if (helpeeScreenCount === 2) {
          return (
            <SelectLanguage
              updateScreenAndUpdateState={updateScreenAndUpdateState}
              userStatus={userStatus}
            />
          );
        } else if (helpeeScreenCount === 3) {
          return (
            <InputProblem
              updateScreenAndUpdateState={updateScreenAndUpdateState}
            />
          );
        } else if (helpeeScreenCount === 4) {
          return <FindMatch matchQuery={matchQuery} user={user} />;
        } else {
          return <Redirect to="/chat" />;
        }
      };
      return (
        <div className="selectionScreen--container--helpee">
          <h1 className="selectionScreen--container--heading1">
            Welcome, {user.firstName}!{" "}
          </h1>
          <h3 className="selectionScreen--container--heading2">
            You can get help from others in minutes.
          </h3>
          {renderScreen()}
        </div>
      );
    }
  };

  return (
    <div className="selectionScreen--container">{renderSelectionScreen()}</div>
  );
}

export default SelectionScreen;
