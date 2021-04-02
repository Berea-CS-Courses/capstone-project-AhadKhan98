const app = require("express")();
const http = require("http").createServer(app);
const PORT = 8000;
const io = require("socket.io")(http, { cors: { origin: "*" } });
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

io.on("connection", (socket) => {
  console.log(`New connection established. ID:${socket.id}`);

  socket.on("SEND_MESSAGE", (data) => {
    io.emit("RECEIVE_MESSAGE", data);
  });
});

http.listen(PORT, () => {
  console.log(`HelpZen backend server running on port: ${PORT}`);
});
