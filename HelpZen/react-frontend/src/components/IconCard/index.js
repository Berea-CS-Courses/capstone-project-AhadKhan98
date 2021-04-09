import React, { useState } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./styles.css";

function IconCard({ technology, onClick }) {
  const [cardSelected, setCardSelected] = useState(false);

  const handleCardClick = () => {
    setCardSelected(!cardSelected);
    onClick(technology.name + "hi");
  };
  return (
    <Card
      onClick={handleCardClick}
      className={`iconCard--card ${
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
