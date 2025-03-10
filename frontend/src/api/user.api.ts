import { User } from "../types/User.types";
import { apiClient } from "./apiClient";

export const GET_AUTHENTICATED_USER = "GET_AUTHENTICATED_USER";

const getLoggedInUser = async (): Promise<User> => {
  return apiClient.get("/user");
};

const UserAPI = {
  getLoggedInUser,
};

export default UserAPI;
