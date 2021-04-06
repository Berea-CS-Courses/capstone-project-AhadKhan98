import React, { useState, useEffect } from "react";

import "./styles.css";

import SelectTechnology from "./SelectTechnology";
import SelectLanguage from "./SelectLanguage";
import InputProblem from "./InputProblem";
import FindMatch from "./FindMatch";

function SelectionScreen({ user, userStatus }) {
  const [helperScreenCount, setHelperScreenCount] = useState(1);
  const [helpeeScreenCount, setHelpeeScreenCount] = useState(1);
  const [matchQuery, setMatchQuery] = useState({ userStatus });

  console.log("MATCH QUERY", matchQuery);

  useEffect(() => {
    if (userStatus === "helpee") {
      setHelperScreenCount(1);
      setMatchQuery({ userStatus });
    } else {
      setHelpeeScreenCount(1);
      setMatchQuery({ userStatus });
    }
  }, [userStatus]);

  const renderSelectionScreen = () => {
    const updateScreenAndUpdateState = (data) => {
      if (userStatus === "helpee") {
        setHelpeeScreenCount(helpeeScreenCount + 1);
      } else {
        setHelperScreenCount(helpeeScreenCount + 1);
      }
      setMatchQuery({ ...matchQuery, ...data });
    };

    if (userStatus === "helper") {
      const renderScreen = () => {
        if (helperScreenCount === 1) {
          return (
            <SelectTechnology
              updateScreenAndUpdateState={updateScreenAndUpdateState}
            />
          );
        } else if (helperScreenCount === 2) {
          return (
            <SelectLanguage
              updateScreenAndUpdateState={updateScreenAndUpdateState}
            />
          );
        } else if (helperScreenCount === 3) {
          return <FindMatch />;
        } else {
          return <h1>In Chat Room</h1>;
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
      const renderScreen = () => {
        if (helpeeScreenCount === 1) {
          return (
            <SelectTechnology
              updateScreenAndUpdateState={updateScreenAndUpdateState}
            />
          );
        } else if (helpeeScreenCount === 2) {
          return (
            <SelectLanguage
              updateScreenAndUpdateState={updateScreenAndUpdateState}
            />
          );
        } else if (helpeeScreenCount === 3) {
          return <InputProblem />;
        } else if (helpeeScreenCount === 4) {
          return <FindMatch />;
        } else {
          return <h1>In Chat Room</h1>;
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
