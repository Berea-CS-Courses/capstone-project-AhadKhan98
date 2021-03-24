const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello from HelpZen backend.");
});

app.listen(port, () => {
  console.log(`HelpZen backend server running on port: ${port}`);
});
