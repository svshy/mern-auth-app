import RegisterData from "../types/RegisterData.types";
import { apiClient } from "./apiClient";

const createAccount = async (data: RegisterData): Promise<void> => {
  return apiClient.post("/auth/register", data);
};

const AuthAPI = {
  createAccount,
};

export default AuthAPI;
