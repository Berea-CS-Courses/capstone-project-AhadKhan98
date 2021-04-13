const Match = require("../models/Match");

exports.addNewMatchToQueue = async (matchData) => {
  if (
    matchData.userId &&
    matchData.userStatus &&
    matchData.technology &&
    matchData.language &&
    matchData.problemStatement
  ) {
    const newMatch = new Match(matchData);
    const result = await newMatch
      .save()
      .then((match) => {
        console.log("New match added");
        return match;
      })
      .catch((err) => {
        console.log("unable to save new match");
        return false;
      });
    return result;
  } else {
    console.log("match data incorrect");
    return false;
  }
};
