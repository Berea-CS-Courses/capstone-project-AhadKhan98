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
    sessionData?.currentMatchQuery &&
    sessionData?.matchFound &&
    sessionData?.roomNumber
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
  // Checks if valid data was provided
  if (sessionObject && userId) {
    const result = await User.findByIdAndUpdate(
      userId,
      {
        activeSession: sessionObject,
      },
      { new: true }
    )
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return false;
      });
    return result;
  } else {
    // Returns false if missing data provided
    return false;
  }
};

/**
 * Takes in roomId and deletes the session object for that roomId
 * @param roomId String
 * @returns Response
 */
exports.deleteSessionUsingRoomId = async (roomId) => {
  // Checks if valid data is entered
  if (roomId) {
    const result = await Session.findOneAndDelete({ roomNumber: roomId }) // Finds session with provided roomId and deletes it
      .then((res) => {
        return true;
      })
      .catch((err) => {
        return false;
      });
    return result;
  } else {
    // Returns false if data does not exist
    return false;
  }
};

/**
 * Takes in userId and the updated session status, and reflects the changes in the database
 * @param userId String
 * @param modifiedSessionStatus String
 * @returns Response
 */
exports.modifySessionForUser = async ({ userId, modifiedSessionStatus }) => {
  // Checks if userId was passed
  if (userId) {
    // Checks if an updated session status was passed
    if (modifiedSessionStatus) {
      // Updates the activeSession field for the user and reflects the status
      const result = await User.findByIdAndUpdate(userId, {
        "activeSession.status": modifiedSessionStatus,
      })
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return false;
        });
      return result;
    } else {
      // If no modified session status was provided, sets it to null
      const result = await User.findByIdAndUpdate(userId, {
        activeSession: null,
      })
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return false;
        });
      return result;
    }
  } else {
    // Returns false if no userId was provided
    return false;
  }
};
