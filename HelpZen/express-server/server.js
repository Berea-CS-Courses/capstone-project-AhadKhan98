const express = require("express");
const app = express();
const PORT = 8000;
require("dotenv").config();
// const io = require("socket.io")(http, { cors: { origin: "*" } });

// Configure middlewares
const http = require("http").createServer(app);
const cors = require("cors");
app.use(express.json());
app.use(cors());

// Import Controllers
const authController = require("./controllers/authController");

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
app.get("/", (req, res) => {
  res.send(`HelpZen backend server running on port: ${PORT}`);
});

// POST Requests
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

app.post("/api/loginUser", (req, res) => {
  const userData = {
    email: req.body.email,
    password: req.body.password,
  };
  authController.loginUser(userData).then((result) => {
    res.send(result);
  });
});

// io.on("connection", (socket) => {
//   console.log(`New connection established. ID:${socket.id}`);

//   socket.on("SEND_MESSAGE", (data) => {
//     io.emit("RECEIVE_MESSAGE", data);
//   });
// });

http.listen(PORT, () => {
  console.log(`HelpZen backend server running on port: ${PORT}`);
});
