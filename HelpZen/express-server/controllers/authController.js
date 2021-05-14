/* 
Handles all functions related to authorization.
*/
const User = require("../models/User");

/**
 * Takes in userData object, checks if necessary fields exist, and creates a user in MongoDB
 * @param userData Object
 * @returns Response
 */
exports.registerNewUser = async (userData) => {
  // Check if required fields exist
  if (
    userData.firstName &&
    userData.lastName &&
    userData.email &&
    userData.password
  ) {
    const newUser = new User(userData); // Create new instance of User model using userData provided
    const result = await newUser
      .save() // Save the User to MongoDB
      .then((user) => {
        console.log("saved new user");
        return user; // Return user object if successful
      })
      .catch((err) => {
        console.log("unable to save new user");
        return false; // Return false if an error occurred
      });
    return result; // Rerturn the result after trying to save to MongoDB
  } else {
    console.log("user data incorrect");
    return false; // Return false if userData incorrect or missing fields
  }
};

/**
 * Takes in userData object, checks if necessary fields exist, and retrives the user from MongoDB
 * @param userData Object
 * @returns Response
 */
exports.loginUser = async (userData) => {
  if (userData.email && userData.password) {
    // Check if userData contains necessary fields
    const findUserInDb = await User.findOne({
      // Stores the result from finding the User in MongoDB
      email: userData.email,
      password: userData.password,
    }).exec();
    if (!findUserInDb) {
      return false; // Return false if no user found or an error occurred
    } else {
      return findUserInDb; // Return the user object if the user was found
    }
  }
};

/**
 * Takes in userId string, and finds a user with that id in MongoDB.
 * @param userId String
 * @returns Response
 */
exports.getUserById = async (userId) => {
  if (userId) {
    const findUserInDb = await User.findById(userId) // Stores result from trying to find user in MongoDB with provided user id.
      .exec()
      .catch(() => console.log("could not find user"));
    if (!findUserInDb) {
      return false; // Return false if user not found or error occurred.
    } else {
      return findUserInDb; // Return user object if user found.
    }
  } else {
    return false; // Return false if no userId provided.
  }
};

exports.updateUserProfile = async (userId, data) => {
  if (data && userId) {
    const result = await User.findByIdAndUpdate(userId, { ...data })
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

exports.updatePrevSessionsForUserId = async (userId, data) => {
  if (data && userId) {
    const result = await User.findByIdAndUpdate(userId, {
      $push: { prevSessions: [data] },
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
