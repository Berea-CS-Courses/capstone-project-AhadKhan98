/* 
Models how the Session object would appear in MongoDB
*/

const mongoose = require("mongoose");

const SessionSchema = mongoose.Schema({
  roomNumber: {
    type: String,
    required: true,
    unique: true,
  },

  currentMatchQuery: {
    type: Object,
    required: true,
  },
  matchFound: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
    unique: false,
    required: false,
    default: "active",
  },
});

const Session = mongoose.model("session", SessionSchema);
module.exports = Session;
