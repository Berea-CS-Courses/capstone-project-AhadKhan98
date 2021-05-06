/* 
Handles all functions related to sessions.
*/
const Session = require("../models/Session");
const User = require("../models/User");

/**
 * Takes in sessionData and creates a new session
 * Checks if a session with the provided roomNumber exists
 * If it exists, then it just returns it
 * Otherwise it creates a new session object
 */
exports.createNewSession = async (sessionData) => {
  // Verify correct data is being passed
  if (
    sessionData.currentMatchQuery &&
    sessionData.matchFound &&
    sessionData.roomNumber
  ) {
    // Check if session with the room number already exists
    const sessionWithSameRoomNumber = await Session.findOne({
      roomNumber: sessionData.roomNumber,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return false;
      });

    if (sessionWithSameRoomNumber) {
      return sessionWithSameRoomNumber; // Return the existing doc if a session object was found
    } else {
      // If the doc does not exist, create a new object and return it
      const newSession = new Session(sessionData);
      const result = await newSession
        .save()
        .then((session) => {
          return session;
        })
        .catch((err) => {
          return false;
        });
      return result;
    }
  } else {
    // Return false if incorrect data was provided
    return false;
  }
};

/**
 * Takes the User Id and the Session Object
 * Attaches the session object to the corresponding user object
 */
exports.addSessionToUser = async (sessionObject, userId) => {
  if (sessionObject && userId) {
    const result = await User.findByIdAndUpdate(userId, {
      activeSession: sessionObject,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return false;
      });
    return result;
  } else {
    return false;
  }
};
