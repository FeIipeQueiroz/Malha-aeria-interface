import axios from "axios";

export const ApiService = axios.create({
  baseURL: "http://26.91.70.227:9000",
  headers: {
    "Content-Type": "application/json",
  },
});
