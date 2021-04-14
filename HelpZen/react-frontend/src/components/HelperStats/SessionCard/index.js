import React from "react";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

function SessionCard({
  sessionNumber,
  duration,
  problemStatement,
  date,
  rating,
}) {
  return (
    <>
      <Card className="helperStats--card">
        <CardActionArea className="helperStats--card--action-area">
          <Typography className="" variant="body2">
            Session # {sessionNumber}
          </Typography>
          <Typography className="" variant="body2">
            Duration: {duration}
          </Typography>
        </CardActionArea>
        <CardContent>
          <Typography variant="h5">Problem Statement</Typography>
          <Typography variant="body2">{problemStatement}</Typography>
        </CardContent>
        <CardActions className="helperStats--card-actions">
          <Typography>Date: {date}</Typography>
          <Typography>Rating: {rating}/5</Typography>
        </CardActions>
      </Card>
    </>
  );
}

export default SessionCard;
