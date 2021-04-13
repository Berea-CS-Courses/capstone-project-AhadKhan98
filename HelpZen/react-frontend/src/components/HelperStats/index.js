import React from "react";

import NavBar from "../NavBar";
import Footer from "../Footer";

import StarIcon from "@material-ui/icons/Star";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

import "./styles.css";

function HelperStats({ user }) {
  return (
    <div className="helperStats--container">
      <NavBar user={user} screen={"helperstats"} />
      <div className="helperStats--container--stats-screen--container">
        <div className="helperStats--container--stats-screen">
          <h1>
            {user.firstName} {user.lastName}
          </h1>
          <h2>
            Helper Rating: <StarIcon className="helperStats--star--icon" />
            <StarIcon className="helperStats--star--icon" />
            <StarIcon className="helperStats--star--icon" />
          </h2>
          <h2>Times Helped: 324</h2>
          <h2>History</h2>
          <Card className="helperStats--card">
            <CardActionArea className="helperStats--card--action-area">
              <Typography className="" variant="body2">
                Session # 1
              </Typography>
              <Typography className="" variant="body2">
                Duration: 1hr 30mins
              </Typography>
            </CardActionArea>
            <CardContent>
              <Typography variant="h5">Problem Statement</Typography>
              <Typography variant="body2">
                Problem statement goes here Problem statement goes here Problem
                statement goes here
              </Typography>
            </CardContent>
            <CardActions className="helperStats--card-actions">
              <Typography>Date: 10/09/2020</Typography>
              <Typography>Rating: 3/5</Typography>
            </CardActions>
          </Card>
        </div>
      </div>
      <Footer user={user} />
    </div>
  );
}

export default HelperStats;
