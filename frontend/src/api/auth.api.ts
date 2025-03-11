import {
  ForgotPasswordBody,
  IsUserUniqueBody,
  IsUserUniqueRes,
  LogInBody,
  ResendActivationBody,
  ResetPasswordBody,
} from "../types/Auth.types";
import { CreateAccountBody } from "../types/Auth.types";
import { User } from "../types/User.types";
import { apiClient } from "./apiClient";

export const GET_CHECK_AUTHENTICATED = "GET_CHECK_AUTHENTICATED";

const createAccount = async (data: CreateAccountBody) => {
  return apiClient.post("/auth/register", data);
};

const isUserUnique = async (data: IsUserUniqueBody): Promise<IsUserUniqueRes> => {
  return apiClient.post("/auth/is-user-unique", data);
};

const verifyAccount = async (token: string) => {
  return apiClient.get(`/auth/verify-account/${token}`);
};

const forgotPassword = async (data: ForgotPasswordBody) => {
  return apiClient.post("/auth/forgot-password", data);
};

const resendActivationEmail = async (data: ResendActivationBody) => {
  return apiClient.post("/auth/resend-activation", data);
};

const resetPassword = async (data: ResetPasswordBody, token: string) => {
  return apiClient.post(`/auth/reset-password/${token}`, data);
};

const login = (data: LogInBody): Promise<User> => {
  return apiClient.post(`/auth/login`, data);
};

const logout = async () => {
  return apiClient.post(`/auth/logout`);
};

const checkAuthReq = async (): Promise<{ message: boolean }> => {
  return apiClient.get(`/auth/check-auth`);
};

const AuthAPI = {
  createAccount,
  isUserUnique,
  verifyAccount,
  forgotPassword,
  resendActivationEmail,
  resetPassword,
  login,
  logout,
  checkAuthReq,
};

export default AuthAPI;
