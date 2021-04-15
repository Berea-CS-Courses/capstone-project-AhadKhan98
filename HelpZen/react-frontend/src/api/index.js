import axios from "axios";

const API_URL = "http://localhost:8000/api";

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
