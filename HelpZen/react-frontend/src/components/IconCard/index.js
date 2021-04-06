import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./styles.css";

function IconCard({ technology, updateScreen }) {
  const handleCardOnClick = () => {
    console.log(
      `Card clicked. Store ${technology.value} for matching purposes.`
    );
    updateScreen();
  };

  return (
    <Card className="iconCard--card" onClick={handleCardOnClick}>
      <CardContent>
        <img className="iconCard--img" src={technology.icon} />
        <Typography className="iconCard--title">{technology.name}</Typography>
      </CardContent>
    </Card>
  );
}

export default IconCard;
