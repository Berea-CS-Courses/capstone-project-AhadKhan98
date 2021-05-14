const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
require("dotenv").config();

// Configure middlewares
const http = require("http").createServer(app);
const cors = require("cors"); // Allows Cross-Origin Resource Sharing
const io = require("socket.io")(http, { cors: { origin: "*" } });
app.use(express.json());
app.use(cors());

// Import Controllers
const authController = require("./controllers/authController");
const matchController = require("./controllers/matchController");
const sessionController = require("./controllers/sessionController");

// Initialize connection to the database
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Established connection to MongoDB"))
  .catch((err) => console.log("Failed to connect to Mongo DB. Error: ", err));

// GET Requests

// Default path to view server in a browser.
app.get("/", (req, res) => {
  res.send(`HelpZen backend server running on port: ${PORT}`);
});

// POST Requests

/**
 * Takes user data from the request
 * Adds the user to MongoDB
 * Defaults prevSessions to an empty array
 * Sends back the response
 */
app.post("/api/registerNewUser", (req, res) => {
  const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };
  authController.registerNewUser(userData).then((result) => {
    res.send(result);
  });
});

/**
 * Takes user data from the request
 * Checks and finds the user with the data in MongoDB
 * Sends back the response
 */
app.post("/api/loginUser", (req, res) => {
  const userData = {
    email: req.body.email,
    password: req.body.password,
  };
  authController.loginUser(userData).then((result) => {
    res.send(result);
  });
});

/**
 * Takes user id from the request
 * Checks and finds the user with the userId in MongoDB
 * Sends back the response
 */
app.post("/api/getUserById", (req, res) => {
  const userId = req.body.userId;
  authController.getUserById(userId).then((result) => {
    res.send(result);
  });
});

app.post("/api/updateUserProfile", (req, res) => {
  const userId = req.body.userId;
  const data = req.body.data;
  authController.updateUserProfile(userId, data).then((result) => {
    res.send(result);
  });
});

app.post("/api/updatePrevSessionsForUserId", (req, res) => {
  const userId = req.body.userId;
  const data = req.body.data;
  authController.updatePrevSessionsForUserId(userId, data).then((result) => {
    res.send(result);
  });
});

/**
 * Takes match data from the request
 * Creates a new match object in MongoDB
 * Sends back the response
 */
app.post("/api/addNewMatch", (req, res) => {
  const matchData = {
    userId: req.body.userId,
    userStatus: req.body.userStatus,
    technology: req.body.technology,
    language: req.body.language,
    problemStatement: req.body.problemStatement,
    codeReference: req.body.codeReference,
    codeLink: req.body.codeLink,
  };
  matchController.addNewMatchToQueue(matchData).then((result) => {
    res.send(result);
  });
});

/**
 * Takes Match ID from request
 * Deletes match in MongoDB
 */
app.post("/api/deleteMatchById", (req, res) => {
  const matchId = req.body.matchId;
  matchController.deleteMatchById(matchId).then((result) => {
    res.send(result);
  });
});

app.post("/api/findMatchForId", (req, res) => {
  const matchId = req.body.matchId;
  matchController.findMatchForId(matchId).then((result) => {
    res.send(result);
  });
});

app.post("/api/createNewSession", (req, res) => {
  const sessionData = req.body.sessionData;
  sessionController.createNewSession(sessionData).then((result) => {
    res.send(result);
  });
});

app.post("/api/deleteSession", (req, res) => {
  const roomId = req.body.roomId;
  sessionController.deleteSessionUsingRoomId(roomId).then((result) => {
    res.send(result);
  });
});

app.post("/api/addSessionToUser", (req, res) => {
  const userId = req.body.userId;
  const sessionObject = req.body.sessionObject;
  sessionController.addSessionToUser(sessionObject, userId).then((result) => {
    res.send(result);
  });
});

app.post("/api/modifySessionForUser", (req, res) => {
  const userId = req.body.userId;
  const updatedSessionStatus = req.body.updatedSessionStatus;
  sessionController
    .modifySessionForUser(userId, updatedSessionStatus)
    .then((result) => {
      res.send(result);
    });
});

// Sockets Implementation for Chat Room
let numClients = {}; // Stores and updates online users in rooms

io.on("connection", (socket) => {
  let globalRoom = null;
  socket.on("disconnect", () => {
    numClients[globalRoom] -= 1;

    // Delete the room from the global count object if no users connected
    if (numClients[globalRoom] === 0) {
      delete numClients[globalRoom];
    }
    console.log("User disconnected emit to room", globalRoom);
    socket.to(globalRoom).emit("displayMessage");
  });

  socket.on("joinRoom", (room, session) => {
    matchQueryOneId = session.currentMatchQuery._id;
    matchQueryTwoId = session.matchFound._id;
    globalRoom = room;
    socket.join(room);
    numClients[room] ? (numClients[room] += 1) : (numClients[room] = 1); // Updates online user count

    // Delete match from MongoDB if both users have connected
    if (numClients[room] >= 2) {
      matchController.deleteMatchById(matchQueryOneId);
      matchController.deleteMatchById(matchQueryTwoId);
    }

    socket.to(room).emit("joinedRoom");
  });

  socket.on("endChatSession", (roomId, helpeeId, helperId) => {
    io.to(roomId).emit("endChatSessionConfirm", { roomId, helpeeId, helperId });
  });

  socket.on("sendMessage", (data) => {
    socket
      .to(data.roomId)
      .emit("receiveMessage", { author: data.author, message: data.message });
  });
});

// Listens on the port provided by the host machine or 8000.
http.listen(PORT, () => {
  console.log(`HelpZen backend server running on port: ${PORT}`);
});
