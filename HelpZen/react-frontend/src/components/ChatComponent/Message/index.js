import React from "react";
import { Typography } from "@material-ui/core";
import "./styles.css";

function Message({ author, message, adminText }) {
  if (adminText) {
    return (
      <div className="message--admintext">
        <Typography className="message--admintext--message">
          {adminText}
        </Typography>
      </div>
    );
  } else {
    return (
      <div className="message--container">
        <Typography className="message--authortext">{author}:</Typography>
        <Typography className="message--messagetext">{message}</Typography>
      </div>
    );
  }
}

export default Message;
