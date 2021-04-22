/**
 * Renders UI for chat room 
 * Restricts acces to only users that have been matched
 */
import React from "react";

import "./styles.css";

function ChatComponent({session}) {
  return (
    <div className="chat-component--container">
      <h1>Chat Room</h1>
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
    </div>
  );
}

export default ChatComponent;
