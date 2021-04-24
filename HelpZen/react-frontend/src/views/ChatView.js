/**
 * Gets necessary data to render ChatComponent
 * Renders ChatComponent and sends required data
 */
import React, {useEffect} from "react";

import {deleteMatchById} from '../api';

import ChatComponent from "../components/ChatComponent";

function ChatView(props) {
  const session = props.location.session;

  useEffect(() => {
    const deleteMatchesFromDb = () => {
      const matchObject1 = session.currentMatchQuery;
      const matchObject2 = session.matchFound;
      deleteMatchById({matchId: matchObject1._id}).then((res) => console.log("MatchObject1 Deletion Status: ", res.data))
      deleteMatchById({matchId: matchObject2._id}).then((res) => console.log("MatchObject1 Deletion Status: ", res.data))
    }
    deleteMatchesFromDb();
  }, [session.currentMatchQuery, session.matchFound])

  console.log("Coming from ChatView", props.location.session);
  return (
    <div>
      <ChatComponent session={props.location.session}/>
    </div>
  );
}

export default ChatView;
