import React from "react";
import { Typography } from "@material-ui/core";
import "./styles.css";

function Message({ author, message }) {
  return (
    <div className="message--container">
      <Typography className="message--authortext">{author}:</Typography>
      <Typography className="message--messagetext">{message}</Typography>
    </div>
  );
}

export default Message;
