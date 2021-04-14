import React, { useState } from "react";

import "./styles.css";

import { Button } from "@material-ui/core";

import IconCard from "../../../../IconCard";
import { data } from "./data";

function SelectTechnology({ userStatus, updateScreenAndUpdateState }) {
  const [techSelections, setTechSelections] = useState([]);

  const handleCardClick = (value) => {
    updateScreenAndUpdateState({ technology: value });
  };

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

  const handleNextButtonClick = () => {
    updateScreenAndUpdateState({ technology: techSelections });
  };

  return (
    <div className="selectTechnology--container">
      <h4 className="selectTechnology--title">
        {userStatus === "helpee" ? (
          <>Please select your preferred technology below</>
        ) : (
          <>Please select all technologies that you are proficient in</>
        )}
      </h4>
      <div className="selectTechnology--iconCard">
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
