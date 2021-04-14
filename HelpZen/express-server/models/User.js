const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    unique: false,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    unique: false,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  prevSessions: {
    type: Array,
    default: [],
  },
});

const User = mongoose.model("users", UserSchema);
module.exports = User;
