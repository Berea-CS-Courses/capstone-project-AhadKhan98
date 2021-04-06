import React from "react";

import "./styles.css";

import IconCard from "../../../../IconCard";
import { data } from "./data";

function SelectTechnology({ updateScreenAndUpdateState }) {
  const handleCardClick = (value) => {
    updateScreenAndUpdateState({ technology: value });
  };

  return (
    <div className="selectTechnology--container">
      <h4>Select technology</h4>
      <div className="selectTechnology--iconCard">
        {data.map((technology) => (
          <IconCard
            onClick={() => handleCardClick(technology.value)}
            technology={technology}
            updateScreenAndUpdateState={updateScreenAndUpdateState}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectTechnology;
