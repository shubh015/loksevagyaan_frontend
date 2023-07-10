import axios, { Axios } from "axios";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;

export const signup = async (data: object) => {
  try {
    const res = await axios.post("/user/signup", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res;
  } catch (error) {
    return error;
  }
};
