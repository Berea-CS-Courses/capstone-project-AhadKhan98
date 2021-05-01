/* 
Handles all functions related to matching helpers with helpees.
*/
const Match = require("../models/Match");

/**
 * Takes in matchData object, checks if necessary fields exist, and creates a match in MongoDB
 * If a Match object already exists with the same userId, the object is updated and no new objects are created
 * Only one match object per user will be added
 * @param matchData Object
 * @returns Response 
 */
exports.addNewMatchToQueue = async (matchData) => {
  if ( // Check if required fields exist in matchData
    matchData.userId &&
    matchData.userStatus &&
    matchData.technology &&
    matchData.language
  ) {
    const prevMatchWithUserId = await Match.findOne({userId: matchData.userId}).exec()
    let result = null;
    // Check if the user has already created a match before
    if (prevMatchWithUserId) { 
      result = await prevMatchWithUserId.updateOne(matchData).then(() => { // Update the existing match object for the user
        return Match.findOne({userId: matchData.userId}).exec()
      })
      console.log("Updated Match Object");
    } else {
      const newMatch = new Match(matchData); // Create a new instance of Match model 
      result = await newMatch // Stores result from trying to save the match to MongoDB
      .save()
      .then((match) => {
        console.log("New match added");
        return match; // Returns the match object if success
      })
      .catch((err) => {
        console.log("unable to save new match", err);
        return false; // Return false if an error occurred
      });
    }
    return result; // Returns the result from saving match to MongoDB.
  } else {
    console.log("match data incorrect");
    return false; // Return false if incorrect/missing data provided.
  }
};

/**
 * Takes in a Match ID and deletes it from MongoDB
 * @param  matchId String
 * @returns Response
 */
exports.deleteMatchById = async (matchId) => {
  if (matchId) {
    const findMatchInDb = await Match.findById(matchId)
    .deleteOne()
    .exec()
    .catch(() => false); // Returns false if an error is encountered
    if (!findMatchInDb) {
      return false;
    } else {
      return true; // Returns true if object was deleted
    }
  } else {
    return false; // Returns false if empty matchId
  }
}

/**
 * Takes in matchId to find a match for the object
 * @param  matchId String
 * @returns Match Object
 */
exports.findMatchForId = async (matchId) => {
  if (matchId) {
    matchObject1 = await Match.findById(matchId)
    .exec()
    .catch(err => false);
    
    if (matchObject1) {
      // Object valid. Find match below
      const userStatusToFind = (matchObject1.userStatus === "helpee" ? "helper": "helpee")
      const matchObject2 = await Match.findOne({userStatus: userStatusToFind, technology: matchObject1.technology,language: matchObject1.language})
      .exec()
      .catch(() => false);
      return (matchObject2 ? matchObject2: false); // Return object if match found otherwise return false

    } else {
      // Object invalid. Return false
      return false;
    }

  } else {
    // Invalid/incomplete matchId object
    return false
  }
}
