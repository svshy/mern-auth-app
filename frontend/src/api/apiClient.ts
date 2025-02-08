import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:5173/api",
  headers: {
    "Content-type": "application/json",
  },
});
