const Match = require("../models/Match");

exports.addNewMatchToQueue = async (matchData) => {
  console.log(matchData.userId);
  if (
    matchData.userId &&
    matchData.userStatus &&
    matchData.technology &&
    matchData.language
  ) {
    const newMatch = new Match(matchData);
    const result = await newMatch
      .save()
      .then((match) => {
        console.log("New match added");
        return match;
      })
      .catch((err) => {
        console.log("unable to save new match", err);
        return false;
      });
    return result;
  } else {
    console.log("match data incorrect");
    return false;
  }
};
