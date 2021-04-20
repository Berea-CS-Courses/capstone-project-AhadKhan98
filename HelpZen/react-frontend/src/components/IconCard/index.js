/**
 * Renders an icon card based on data provided to it
 * Allows calling functions when the card is clicked
 */
import React, { useState } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./styles.css";

function IconCard({ technology, onClick }) {
  const [cardSelected, setCardSelected] = useState(false);

  // Selects/deselects card and call onClick function provided
  const handleCardClick = () => {
    setCardSelected(!cardSelected);
    onClick(technology.name);
  };
  return (
    <Card
      onClick={handleCardClick}
      className={`iconCard--card ${ // add class if card is selected for additional styling
        cardSelected ? "iconCard--card--selected" : null
      }`}
    >
      <CardContent>
        <img className="iconCard--img" src={technology.icon} />
        <Typography className="iconCard--title">{technology.name}</Typography>
      </CardContent>
    </Card>
  );
}

export default IconCard;
