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
