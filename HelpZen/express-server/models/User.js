/* 
Models how the Match object would appear in MongoDB
*/

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
  activeSession: {
    type: Object,
    required: false,
    default: null,
  },
  prevSessions: {
    type: Array,
    default: [],
    required: false,
  },
});

const User = mongoose.model("users", UserSchema);
module.exports = User;
