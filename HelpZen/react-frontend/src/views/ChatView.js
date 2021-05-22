/**
 * Gets necessary data to render ChatComponent
 * Renders ChatComponent and sends required data
 */
import React from "react";

import ChatComponent from "../components/ChatComponent";

import { createNewSession, addSessionToUser } from "../api";

function ChatView(props) {
  const session = props.location.session; // Gets session object form data being passed via props
  const user = props.location.userObject?.user; // Gets user object from data being passed via props

  const roomId = props.match.params.helpeeId + props.match.params.helperId;

  // Redirects to homepage if no session object or no user object was given through props
  if (!session || !user) {
    window.location.replace("/");
  }

  /**
   * Takes the session object passed via props
   * Calls the API to create a new session object in DB
   * Attaches the newly created session to user's activeSession field in the DB
   */
  const createSessionAndAddToUser = () => {
    const sessionData = {
      ...session,
      roomNumber: `${props.match.params.helpeeId}/${props.match.params.helperId}`,
    };
    createNewSession({ sessionData: sessionData }).then((res) => {
      const sessionObjectFromDB = res.data;
      addSessionToUser(sessionObjectFromDB, user._id).then((res) => {});
    });
  };
  createSessionAndAddToUser();

  return (
    <div>
      <ChatComponent
        roomId={roomId}
        user={user}
        session={props.location.session}
      />
    </div>
  );
}

export default ChatView;
