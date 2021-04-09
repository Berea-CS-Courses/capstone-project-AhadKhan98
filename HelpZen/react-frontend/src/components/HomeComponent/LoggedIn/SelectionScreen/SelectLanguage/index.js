import React, { useState } from "react";

import { Button } from "@material-ui/core";

import IconCard from "../../../../IconCard";
import { data } from "./data";

import "./styles.css";

function SelectLanguage({ userStatus, updateScreenAndUpdateState }) {
  const [languageSelections, setLanguageSelections] = useState([]);

  const handleCardClick = (value) => {
    updateScreenAndUpdateState({ language: value });
  };

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

  const handleNextButtonClick = () => {
    updateScreenAndUpdateState({ language: languageSelections });
  };

  return (
    <div className="selectLanguage--container">
      <h3 className="selectLanguage--title">
        {userStatus === "helpee" ? (
          <>Please select your preferred language below</>
        ) : (
          <>Please select all languages that you are proficient in</>
        )}
      </h3>
      <div className="selectLanguage--iconCard">
        {userStatus === "helpee" ? (
          <>
            {data.map((language) => (
              <IconCard
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
