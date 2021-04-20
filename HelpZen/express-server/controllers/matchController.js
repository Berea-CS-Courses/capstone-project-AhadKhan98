/* 
Handles all functions related to matching helpers with helpees.
*/
const Match = require("../models/Match");

/**
 * Takes in matchData object, checks if necessary fields exist, and creates a match in MongoDB
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
    const newMatch = new Match(matchData); // Create a new instance of Match model 
    const result = await newMatch // Stores result from trying to save the match to MongoDB
      .save()
      .then((match) => {
        console.log("New match added");
        return match; // Returns the match object if success
      })
      .catch((err) => {
        console.log("unable to save new match", err);
        return false; // Return false if an error occurred
      });
    return result; // Returns the result from saving match to MongoDB.
  } else {
    console.log("match data incorrect");
    return false; // Return false if incorrect/missing data provided.
  }
};
