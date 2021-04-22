/**
 * Gets necessary data to render ChatComponent
 * Renders ChatComponent and sends required data
 */
import React from "react";

import ChatComponent from "../components/ChatComponent";

function ChatView(props) {
  return (
    <div>
      <ChatComponent session={props.location.session}/>
    </div>
  );
}

export default ChatView;
