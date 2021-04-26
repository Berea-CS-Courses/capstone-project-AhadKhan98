/**
 * Renders UI for chat room 
 * Restricts access to only users that have been matched
 */
import React from "react";
import Footer from '../Footer';
import NavBar from '../NavBar';
import "./styles.css";

function ChatComponent({user, session}) {
  console.log("User Object", user);
  console.log("Session Object", session);

  return (
    <div className="chat-component">
      <NavBar screen={true} user={user}/>
      <div className="chat-component--container">
        <div className="chat-component--header">
          <h1>Chat Session</h1>
          <h4>Time Elapsed: 0:00</h4>
          <button>End Session</button>
        </div>
        <div className="chat-component--body">
          <div className="chat-component--body--columns">
          <div className="chat-component--body--left">
            <div className="chat-component--body--left--members">
              Members
            </div>
            <div className="chat-component--body--left--technologies">
              Technologies
            </div>
          </div>
          <div className="chat-component--body--center">
            CENTER
          </div>
          </div>
          <div className="chat-component--body--textbox">
            TextBox
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