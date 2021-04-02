import React, { useState } from "react";
import socketClient from "socket.io-client";
import "./styles.css";

const socket = socketClient("http://localhost:8000");

function GlobalChat() {
  const [userName, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { username: "Admin", message: "Welcome to the chat room!" },
  ]);

  socket.on("RECEIVE_MESSAGE", (data) => {
    setMessages([...messages, data]);
    console.log(messages);
  });

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("SEND_MESSAGE", {
      username: userName,
      message: message,
    });
    setMessage("");
  };

  return (
    <div className="globalChat--container">
      <div className="globalChat--header">
        <p>Global Chat</p>
      </div>
      <div className="globalChat--messages">
        {messages.map((msg) => (
          <>
            <p className="">
              {msg.username}: {msg.message}
            </p>
          </>
        ))}
      </div>
      <div className="globalChat--chat-form">
        <input
          type="text"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Submit</button>
      </div>
    </div>
  );
}

export default GlobalChat;
