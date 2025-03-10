import axios, { AxiosInstance } from "axios";
import globalRouter from "../utils/globalRouter";
import { toaster } from "../components/ui/Toaster/Toaster";

const options = {
  baseURL: "http://localhost:5173/api",
  headers: {
    "Content-type": "application/json",
    "Cache-Control": "no-cache",
  },
  withCredentials: true,
};

const apiClient: AxiosInstance = axios.create(options);

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (
      error.response?.data.error === "User not authenticated" &&
      globalRouter.navigate
    ) {
      globalRouter.navigate("/login");
      toaster.create({
        type: "error",
        description: "Log in to perform this operation",
      });
    }
    if (error.response?.data) {
      return Promise.reject(error.response.data);
    }

    return Promise.reject(error);
  },
);

export { apiClient };
