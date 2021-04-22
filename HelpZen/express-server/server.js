const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
require("dotenv").config();
// const io = require("socket.io")(http, { cors: { origin: "*" } });

// Configure middlewares
const http = require("http").createServer(app);
const cors = require("cors"); // Allows Cross-Origin Resource Sharing
app.use(express.json());
app.use(cors());

// Import Controllers
const authController = require("./controllers/authController");
const matchController = require("./controllers/matchController");

// Initialize connection to the database
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
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
    prevSessions: [
      {
        duration: 100,
        problemStatement: "Testing a problem statement from API",
        date: "10/10/10",
        rating: 4,
      },
      {
        duration: 200,
        problemStatement: "Testing a problem statement from API # 2",
        date: "10/10/12",
        rating: 5,
      },
    ],
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
    console.log("RES IS", result);
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
app.post("/api/deleteMatchById", (req,res) => {
  const matchId = req.body.matchId;
  matchController.deleteMatchById(matchId).then((result) => {
    res.send(result);
  })
})


app.post("/api/findMatch", (req,res) => {
  const matchId = req.body.matchId;
  matchController.findMatchForId(matchId).then((result) => {
    res.send(result);
  })
})

// TODO: Uncomment when working on sockets implementation
// io.on("connection", (socket) => {
//   console.log(`New connection established. ID:${socket.id}`);

//   socket.on("SEND_MESSAGE", (data) => {
//     io.emit("RECEIVE_MESSAGE", data);
//   });
// });

// Listens on the port provided by the host machine or 8000.
http.listen(PORT, () => {
  console.log(`HelpZen backend server running on port: ${PORT}`);
});
