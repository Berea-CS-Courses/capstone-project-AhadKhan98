/**
 * Renders an icon card for each item in data
 * Enables clicking functionality
 */
import React, { useState } from "react";

import { Button } from "@material-ui/core";

import IconCard from "../../../../IconCard";
import { data } from "./data";

import "./styles.css";

function SelectLanguage({ userStatus, updateScreenAndUpdateState }) {
  const [languageSelections, setLanguageSelections] = useState([]); // Stores all language selections in state

  // Used when userStatus="helpee". Updates the screen and stores selection
  const handleCardClick = (value) => {
    updateScreenAndUpdateState({ language: value });
  };

  // Used when userStatus="helper". Allows multiple selections and stores them in state.
  const handleCardSelect = (value) => {
    if (languageSelections.includes(value)) {
      const newLanguageSelections = [...languageSelections];
      const valueIndex = newLanguageSelections.indexOf(value);
      newLanguageSelections.splice(valueIndex, 1);
      setLanguageSelections(newLanguageSelections);
    } else {
      setLanguageSelections([...languageSelections, value]);
    }
  };

  // Used when userStatus="helper". Updates the screen and updates the matchQuery in state.
  const handleNextButtonClick = () => {
    updateScreenAndUpdateState({ language: languageSelections });
  };

  return (
    <div className="selectLanguage--container">
      <h3 className="selectLanguage--title">
        {userStatus === "helpee" ? ( // Renders text based on userStatus
          <>Please select your preferred language below</>
        ) : (
          <>Please select all languages that you are proficient in</>
        )}
      </h3>
      <div className="selectLanguage--iconCard">
        {/* Provides a different onClick function to IconCard component based on userStatus */}
        {userStatus === "helpee" ? (
          <>
            {data.map((language) => (
              <IconCard
                key={language.value}
                onClick={() => handleCardClick(language.value)}
                technology={language}
              />
            ))}
          </>
        ) : (
          <>
            {data.map((language) => (
              <IconCard
                onClick={() => handleCardSelect(language.value)}
                technology={language}
              />
            ))}
          </>
        )}
      </div>
      {/* Displays the next button only when multiple selections are allowed */}
      {userStatus === "helper" ? (
        <Button
          onClick={handleNextButtonClick}
          className="selectTechnology--nextButton"
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      ) : null}
    </div>
  );
}

export default SelectLanguage;
