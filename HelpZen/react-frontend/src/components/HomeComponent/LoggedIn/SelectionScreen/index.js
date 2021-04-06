import React, { useState } from "react";

import "./styles.css";

import SelectTechnology from "./SelectTechnology";
import SelectLanguage from "./SelectLanguage";
import InputProblem from "./InputProblem";
import FindMatch from "./FindMatch";

function SelectionScreen({ user, userStatus }) {
  const [helperScreenCount, setHelperScreenCount] = useState(1);
  const [helpeeScreenCount, setHelpeeScreenCount] = useState(1);

  const renderSelectionScreen = () => {
    if (userStatus === "helper") {
      const renderScreen = () => {
        if (helperScreenCount === 1) {
          return <SelectTechnology />;
        } else if (helperScreenCount === 2) {
          return <SelectLanguage />;
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
          <button onClick={() => setHelperScreenCount(helperScreenCount + 1)}>
            Next
          </button>
        </div>
      );
    } else if (userStatus === "helpee") {
      const updateScreen = () => {
        setHelpeeScreenCount(helpeeScreenCount + 1);
      };

      const renderScreen = () => {
        if (helpeeScreenCount === 1) {
          return <SelectTechnology updateScreen={updateScreen} />;
        } else if (helpeeScreenCount === 2) {
          return <SelectLanguage />;
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
