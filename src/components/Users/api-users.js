import axios from "axios";

const headers = JSON.parse(sessionStorage.getItem("userLoggedInDetails"));

// export const getAllUsers = async ({ receiver_id, receiver_class, body }) => {
    // try {
    //     const response = await axiosFetch.get("/api/v1/users/recent", {
    //       receiver_id,
    //       receiver_class,
    //       body,
    //     });
    //     return response;
    //   } catch (error) {
    //     return error;
    //   }
// }

const axiosFetch = headers
  ? axios.create({
      baseURL: `${process.env.REACT_APP_AVION_SLACK_API}`,
      headers: {
        "access-token": headers["access-token"],
        client: headers["client"],
        expiry: headers["expiry"],
        uid: headers["uid"],
      },
    })
  : null;

export const getRecentDms = async () => {
  try {
    const response = await axiosFetch.get("/api/v1/users/recent");
    return response;
  } catch (error) {
    return error;
  }
};

