import React from "react";

import IconCard from "../../../../IconCard";
import { data } from "./data";

import "./styles.css";

function SelectLanguage({ updateScreenAndUpdateState }) {
  const handleCardClick = (value) => {
    updateScreenAndUpdateState({ language: value });
  };

  return (
    <div className="selectLanguage--container">
      <h3 className="selectLanguage--title">
        Please select your preferred language below
      </h3>
      <div className="selectLanguage--iconCard">
        {data.map((language) => (
          <IconCard
            onClick={() => handleCardClick(language.value)}
            technology={language}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectLanguage;
