import {
  ForgotPasswordBody,
  IsUserUniqueBody,
  IsUserUniqueRes,
  ResendActivationBody,
  ResetPasswordBody,
} from "../types/Auth.types";
import { CreateAccountBody } from "../types/Auth.types";
import { apiClient } from "./apiClient";

const createAccount = async (data: CreateAccountBody) => {
  return apiClient.post("/auth/register", data);
};

const isUserUnique = async (data: IsUserUniqueBody) => {
  return apiClient.post<IsUserUniqueRes>("/auth/is-user-unique", data);
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

const AuthAPI = {
  createAccount,
  isUserUnique,
  verifyAccount,
  forgotPassword,
  resendActivationEmail,
  resetPassword,
};

export default AuthAPI;
