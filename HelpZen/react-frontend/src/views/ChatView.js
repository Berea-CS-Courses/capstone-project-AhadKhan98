/**
 * Gets necessary data to render ChatComponent
 * Renders ChatComponent and sends required data
 */
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { deleteMatchById } from "../api";
import io from "socket.io-client";

import ChatComponent from "../components/ChatComponent";

function ChatView(props) {
  const session = props.location.session; // Gets session object form data being passed via props
  const user = props.location.userObject?.user; // Gets user object from data being passed via props

  const helpeeId = props.match.params.helpeeId;
  const helperId = props.match.params.helperId;

  // Redirects to homepage if no session object or no user object was given through props
  if (!session || !user) {
    window.location.replace("/");
  }

  useEffect(() => {
    const socket = io("http://localhost:8000");
    socket.emit("joinRoom", helpeeId + helperId);
  }, []);

  /**
   * Deletes both of the match objects from MongoDB
   */
  // const deleteMatchesFromDb = () => {
  //   const matchObject1 = session.currentMatchQuery;
  //   const matchObject2 = session.matchFound;

  //   deleteMatchById({matchId: matchObject1._id}) // Calls API to delete the match object and waits for a response
  //   .then((res) => console.log("MatchObject1 Deletion Status: ", res.data));

  //   deleteMatchById({matchId: matchObject2._id}) // Calls API to delete the match object and waits for a response
  //   .then((res) => console.log("MatchObject1 Deletion Status: ", res.data));
  // }
  // deleteMatchesFromDb();

  return (
    <div>
      <ChatComponent user={user} session={props.location.session} />
    </div>
  );
}

export default ChatView;
