/**
 * Renders UI for chat room
 * Restricts access to only users that have been matched
 */
import React, { useState, useEffect, useRef } from "react";
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
import io from "socket.io-client";
import { getUserById } from "../../api";

function ChatComponent({ user, session, roomId }) {
  const [helpee, setHelpee] = useState();
  const [helper, setHelper] = useState();
  const [socket] = useState(() => io("http://localhost:8000"));
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    socket.emit("joinRoom", roomId);
    socket.on("receiveMessage", (msg) => {
      console.log("RECEIVE MESSAGE");
      setMessages((oldMessages) => [msg, ...oldMessages]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = (message) => {
    if (message.message) {
      socket.emit("sendMessage", message);
      setMessages((oldMessages) => [message, ...oldMessages]);
      setCurrentMessage("");
    }
  };

  // Runs the code inside the useEffect only once when the component mounts
  useEffect(() => {
    /**
     * Uses the session object to find the user object for the helper and helpee
     * Sets the user objects to state
     */
    const setHelpeeAndHelperToState = () => {
      getUserById(session.currentMatchQuery.userId).then((response) => {
        if (session.currentMatchQuery.userStatus === "helpee") {
          setHelpee(response.data);
        } else if (session.currentMatchQuery.userStatus === "helper") {
          setHelper(response.data);
        }
      });
      getUserById(session.matchFound.userId).then((response) => {
        if (session.matchFound.userStatus === "helpee") {
          setHelpee(response.data);
        } else if (session.matchFound.userStatus === "helper") {
          setHelper(response.data);
        }
      });
    };
    setHelpeeAndHelperToState();
  }, []);

  /**
   * Takes in the technology name stored in the database and converts it to the full form
   * @param technology String containing the technology name as stored in the database
   */
  const renderTechnologyAsText = (technology) => {
    switch (technology) {
      case "ai":
        return <>Artifical Intelligence</>;
      case "datasci":
        return <>Data Science</>;
      case "databases":
        return <>Databases</>;
      case "Desktop":
        return <>Desktop Development</>;
      case "web":
        return <>Web Development</>;
      case "scripting":
        return <>Scripting</>;
      case "mobile":
        return <>Mobile Development</>;
      case "game":
        return <>Game Development</>;
    }
  };

  /**
   * Takes in the language stored in the database and converts it to the full form
   * @param language String containing the language as stored in the database
   */
  const renderLanguageAsText = (language) => {
    switch (language) {
      case "c":
        return <>C</>;
      case "cpp":
        return <>C++</>;
      case "csharp":
        return <>C#</>;
      case "golang":
        return <>Go</>;
      case "python":
        return <>Python</>;
      case "php":
        return <>PHP</>;
      case "javascript":
        return <>JavaScript</>;
      case "java":
        return <>Java</>;
      case "rlang":
        return <>R</>;
      case "ruby":
        return <>Ruby</>;
      case "sql":
        return <>SQL</>;
      case "swift":
        return <>Swift</>;
    }
  };

  const renderMessages = () => {
    const result = messages.map((msg) => {
      return (
        <ListItem>
          <Message author={msg.author} message={msg.message} />
        </ListItem>
      );
    });
    return result;
  };

  /**
   * Renders the default messages that need to be sent to introduce the two users
   * Message contains data related to the match query
   */
  const renderAdminText = () => {
    const messageToRender = (
      <div>
        <Typography style={{ fontWeight: "bold", textAlign: "center" }}>
          Hello and welcome to helpzen's chat room!
        </Typography>
        <Typography style={{ textAlign: "center" }}>
          {helpee?.firstName} is looking for help from {helper?.firstName}
        </Typography>
        <Typography style={{ textAlign: "center" }}>
          Problem Statement:{" "}
          {session.currentMatchQuery.userStatus === "helpee" ? (
            <>{session.currentMatchQuery.problemStatement}</>
          ) : (
            <>{session.matchFound.problemStatement}</>
          )}
        </Typography>
        <Typography style={{ textAlign: "center" }}>
          Code Reference:{" "}
          {session.currentMatchQuery.userStatus === "helpee" ? (
            <>{session.currentMatchQuery.codeReference}</>
          ) : (
            <>{session.matchFound.codeReference}</>
          )}
        </Typography>
        <Typography style={{ textAlign: "center" }}>
          Link to codebase:
          {session.currentMatchQuery.userStatus === "helpee" ? (
            <>
              {!session.currentMatchQuery.codeLink ? (
                <>None Provided</>
              ) : (
                <>
                  <a
                    className="adminText--codelink--linktext"
                    href={session.currentMatchQuery.codeLink}
                    target="_blank"
                  >
                    <Button
                      className="adminText--codelink-btn"
                      variant="contained"
                      color="primary"
                    >
                      View Code
                    </Button>
                  </a>
                </>
              )}
            </>
          ) : (
            <>{session.matchFound.codeLink}</>
          )}
        </Typography>
      </div>
    );
    return <Message adminText={messageToRender} />;
  };

  return (
    <div className="chat-component">
      <NavBar screen={true} user={user} />
      <div className="chat-component--container">
        <div className="chat-component--header">
          <Typography variant="h1">Chat Session</Typography>
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
                  Helper: {helper?.firstName}
                </Typography>
                <Typography
                  className="chat-component--body--left--members--bodytext"
                  variant="body1"
                >
                  Helpee: {helpee?.firstName}
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
                  Technology:{" "}
                  {
                    // Renders full form of the helpee's technology selection (e.g: datasci => Data Science)
                    session.currentMatchQuery.userStatus === "helpee"
                      ? renderTechnologyAsText(
                          session.currentMatchQuery.technology
                        )
                      : renderTechnologyAsText(session.matchFound.technology)
                  }
                </Typography>
                <Typography
                  className="chat-component--body--left--technologies--bodytext"
                  variant="body1"
                >
                  Language:{" "}
                  {
                    // Renders full form of the helpee's language selection (e.g: csharp => C#)
                    session.currentMatchQuery.userStatus === "helpee"
                      ? renderLanguageAsText(session.currentMatchQuery.language)
                      : renderLanguageAsText(session.matchFound.language)
                  }
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
                <ListItem>{renderAdminText()}</ListItem>
                {renderMessages()}
              </List>
            </div>
          </div>
          <div className="chat-component--body--textbox">
            <TextField
              placeholder="Type your response here.."
              variant="outlined"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={(e) =>
                e.key === "Enter"
                  ? sendMessage({
                      author: user.firstName,
                      roomId: roomId,
                      message: currentMessage,
                    })
                  : null
              }
            ></TextField>
            <Button
              className="chat-component--body--textbox--sendButton"
              variant="contained"
              color="primary"
              onClick={() =>
                sendMessage({
                  author: user.firstName,
                  roomId: roomId,
                  message: currentMessage,
                })
              }
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
