import axios from "axios";

export const baseURLInstance = axios.create({
  baseURL: "https://connections-api.herokuapp.com/",
});
