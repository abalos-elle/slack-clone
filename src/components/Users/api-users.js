import axios from 'axios';

export const FetchAllUsers = async (config) => {
  try {
      const response = await axios.get("http://206.189.91.54//api/v1/users", {
          headers: config
      });
      return response;
  } catch (error) {
      return error;
  }
}

export const FetchRecentDms = async (config) => {
  try {
      const response = await axios.get("http://206.189.91.54//api/v1/users/recent", {
          headers: config
      });
      return response;
  } catch (error) {
      return error;
  }
}

