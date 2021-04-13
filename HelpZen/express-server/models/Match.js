const mongoose = require("mongoose");

const MatchSchema = mongoose.Schema({
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  userStatus: {
    type: String,
    unique: false,
    required: true,
  },
  technology: {
    type: mongoose.Schema.Types.Mixed,
    unique: false,
    required: true,
  },
  language: {
    type: mongoose.Schema.Types.Mixed,
    unique: false,
    required: true,
  },
  problemStatement: {
    type: String,
    unique: false,
    required: true,
  },
});

const Match = mongoose.model("matches", MatchSchema);
module.exports = Match;
