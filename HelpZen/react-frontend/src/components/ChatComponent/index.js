/**
 * Renders UI for chat room
 * Restricts access to only users that have been matched
 */
import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import {
  Typography,
  Button,
  TextField,
  List,
  ListItem,
} from "@material-ui/core";
import Message from "./Message";
import "./styles.css";

function ChatComponent({ user, session }) {
  console.log("User Object", user);
  console.log("Session Object", session);

  return (
    <div className="chat-component">
      <NavBar screen={true} user={user} />
      <div className="chat-component--container">
        <div className="chat-component--header">
          <Typography variant="h1">Chat Session</Typography>
          <Typography variant="h6">Time Elapsed: 0:00s</Typography>
          <Button variant="contained" color="secondary">
            End Session
          </Button>
        </div>
        <div className="chat-component--body">
          <div className="chat-component--body--columns">
            <div className="chat-component--body--left">
              <div className="chat-component--body--left--members">
                <Typography className="chat-component--body--left--members--headertext">
                  Members
                </Typography>
                <Typography
                  className="chat-component--body--left--members--bodytext"
                  variant="body1"
                >
                  Helper: Name
                </Typography>
                <Typography
                  className="chat-component--body--left--members--bodytext"
                  variant="body1"
                >
                  Helpee: Name
                </Typography>
              </div>
              <div className="chat-component--body--left--technologies">
                <Typography className="chat-component--body--left--technologies--headertext">
                  Tech Stack
                </Typography>
                <Typography
                  className="chat-component--body--left--technologies--bodytext"
                  variant="body1"
                >
                  Technology: Name
                </Typography>
                <Typography
                  className="chat-component--body--left--technologies--bodytext"
                  variant="body1"
                >
                  Language: Name
                </Typography>
              </div>
            </div>
            <div className="chat-component--body--center">
              <List
                style={{
                  maxHeight: "90%",
                  overflow: "auto",
                }}
              >
                <ListItem>
                  <Message author="admin" message="test" />
                </ListItem>
              </List>
            </div>
          </div>
          <div className="chat-component--body--textbox">
            <TextField
              placeholder="Type your response here.."
              variant="outlined"
            ></TextField>
            <Button
              className="chat-component--body--textbox--sendButton"
              variant="contained"
              color="primary"
            >
              Send
            </Button>
          </div>
        </div>
      </div>
      <Footer user={user} />
    </div>
  );
}

export default ChatComponent;

/*
<h4>{session.currentMatchQuery.userStatus} Information</h4>
      <p>
        Match ID: {session.currentMatchQuery._id} <br />
      User ID: {session.currentMatchQuery.userId} <br />
      Technology: {session.currentMatchQuery.technology} <br />
      Language: {session.currentMatchQuery.language} <br />
      Code Reference: {session.currentMatchQuery.codeReference} <br />
      Problem Statement: {session.currentMatchQuery.problemStatement} <br />
      Code Link: {session.currentMatchQuery.codeLink}
      </p>
      <h4>{session.matchFound.userStatus} Information</h4>
      <p>
        Match ID: {session.matchFound._id} <br />
      User ID: {session.matchFound.userId} <br />
      Technology: {session.matchFound.technology} <br />
      Language: {session.matchFound.language} <br />
      Code Reference: {session.matchFound.codeReference} <br />
      Problem Statement: {session.matchFound.problemStatement} <br />
      Code Link: {session.matchFound.codeLink}
      </p>
*/
