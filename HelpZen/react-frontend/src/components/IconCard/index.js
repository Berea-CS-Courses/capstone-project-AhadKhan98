import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./styles.css";

function IconCard({ technology, onClick }) {
  const handleCardClick = () => {
    onClick();
  };
  return (
    <Card onClick={handleCardClick} className="iconCard--card">
      <CardContent>
        <img className="iconCard--img" src={technology.icon} />
        <Typography className="iconCard--title">{technology.name}</Typography>
      </CardContent>
    </Card>
  );
}

export default IconCard;
