import axios from "axios";

const headers = JSON.parse(sessionStorage.getItem("userLoggedInDetails"));

const axiosFetch = axios.create({
  baseURL: process.env.REACT_APP_AVION_SLACK_API,
  headers: {
    "access-token": headers["access-token"],
    client: headers["client"],
    expiry: headers["expiry"],
    uid: headers["uid"],
  },
});

export const getAllUsers = async () => {
  try {
    const response = await axiosFetch.get("/api/v1/users/");
    return response;
  } catch (error) {
    return error;
  }
};

export const getRecentDms = async () => {
  try {
    const response = await axiosFetch.get("/api/v1/users/recent/");
    return response;
  } catch (error) {
    return error;
  }
};
