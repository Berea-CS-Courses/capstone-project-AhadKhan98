import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./styles.css";

function IconCard({ technology }) {
  return (
    <Card className="iconCard--card">
      <CardContent>
        <Typography>{technology.name}</Typography>
        <img className="iconCard--img" src={technology.icon} />
        <Typography>{technology.value}</Typography>
      </CardContent>
    </Card>
  );
}

export default IconCard;
