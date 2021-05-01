/**
 * Renders an icon card for each item in data
 * Enables clicking functionality
 */
import React, { useState } from "react";

import "./styles.css";

import { Button } from "@material-ui/core";

import IconCard from "../../../../IconCard";
import { data } from "./data";

function SelectTechnology({ userStatus, updateScreenAndUpdateState }) {
  const [techSelections, setTechSelections] = useState([]); // Stores all selections in state

  // Used when userStatus="helpee". Updates the screen and stores selection
  const handleCardClick = (value) => {
    updateScreenAndUpdateState({ technology: value });
  };

  // Used when userStatus="helper". Allows multiple selections and stores them in state.
  const handleCardSelect = (value) => {
    if (techSelections.includes(value)) {
      const newTechSelections = [...techSelections];
      const valueIndex = newTechSelections.indexOf(value);
      newTechSelections.splice(valueIndex, 1);
      setTechSelections(newTechSelections);
    } else {
      setTechSelections([...techSelections, value]);
    }
  };

  // Used when userStatus="helper". Updates the screen and updates the matchQuery in state.
  const handleNextButtonClick = () => {
    updateScreenAndUpdateState({ technology: techSelections });
  };

  return (
    <div className="selectTechnology--container">
      <h4 className="selectTechnology--title">
        {userStatus === "helpee" ? ( // Renders text based on userStatus
          <>Please select your preferred technology below</>
        ) : (
          <>Please select all technologies that you are proficient in</>
        )}
      </h4>
      <div className="selectTechnology--iconCard">
        {/* Provides a different onClick function to IconCard component based on userStatus */}
        {userStatus === "helpee" ? ( 
          <>
            {data.map((technology) => (
              <IconCard
                key={technology.name}
                onClick={() => handleCardClick(technology.value)}
                technology={technology}
              />
            ))}
          </>
        ) : (
          <>
            {data.map((technology) => (
              <IconCard
                key={technology.name}
                onClick={() => handleCardSelect(technology.value)}
                technology={technology}
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

export default SelectTechnology;
