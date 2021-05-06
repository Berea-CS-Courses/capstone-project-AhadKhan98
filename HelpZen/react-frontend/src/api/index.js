import axios from "axios";

const API_URL = "http://localhost:8000/api"; // TODO: Change the url after deploying server.

/* Contains all functions necessary to fetch data from the helpzen backend express server. */

/**
 * Takes in a userData object, adds the user to MongoDB, and returns the response.
 * @param userData Object containing data related to user. Must contain firstName, lastName, email and password fields.
 * @returns Response recieved from express server.
 */
export const registerNewUser = (userData) => {
  return axios
    .post(API_URL + "/registerNewUser", userData)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

/**
 * Takes in a userData object, checks to see if the user exists in MongoDB, and returns the response.
 * @param userData Object containing data related to the user. Must contain email, and password fields.
 * @returns Response recieved from express server.
 */
export const loginUser = (userData) => {
  return axios
    .post(API_URL + "/loginUser", userData)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

/**
 * Takes in a userId, checks to see if a user exists in MongoDB, and returns the response.
 * @param userId String representing the userId that needs to be queried from the databse.
 * @returns Response recieved from express server.
 */
export const getUserById = (userId) => {
  return axios
    .post(API_URL + "/getUserById", { userId })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

/**
 * Takes in matchData object, adds the match to the 'matches' table in MongoDB, and returns the response.
 * @param matchData Object containing fields related to the match query.
 * @returns Response recieved from express server.
 */
export const addMatchQueryToDb = (matchData) => {
  return axios
    .post(API_URL + "/addNewMatch", matchData)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

/**
 * Takes in a match id and finds
 * @param matchId String containing the id for the match object
 * @returns Match object if match is available else false
 */
export const findMatchForId = (matchId) => {
  return axios
    .post(API_URL + "/findMatchForId", matchId)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

/**
 * Takes in match id and delete the object from MongoDB
 * @param matchId String containing the id for the match object
 * @returns True/False indicating success or failure of object deletion
 */
export const deleteMatchById = (matchId) => {
  return axios
    .post(API_URL + "/deleteMatchById", matchId)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const createNewSession = (sessionData) => {
  return axios
    .post(API_URL + "/createNewSession", sessionData)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const addSessionToUser = (sessionObject, userId) => {
  return axios
    .post(API_URL + "/addSessionToUser", { sessionObject, userId })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
