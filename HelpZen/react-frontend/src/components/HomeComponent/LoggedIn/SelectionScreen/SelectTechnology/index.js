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
      <h4 className="selectTechnology--title">
        Please select your preferred technology below
      </h4>
      <div className="selectTechnology--iconCard">
        {data.map((technology) => (
          <IconCard
            key={technology.name}
            onClick={() => handleCardClick(technology.value)}
            technology={technology}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectTechnology;
