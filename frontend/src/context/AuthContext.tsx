import React, { createContext, useContext, ReactNode } from "react";
import { LogInBody } from "../types/Auth.types";
import AuthAPI, { GET_CHECK_AUTHENTICATED } from "../api/auth.api";
import { toaster } from "../components/ui/Toaster/Toaster";
import useMutation from "../hooks/useMutation";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { User } from "../types/User.types";
import UserAPI, { GET_AUTHENTICATED_USER } from "../api/user.api";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  loginReq: (data: LogInBody) => void;
  logoutReq: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: isAuthenticated, isFetching: isCheckAuthFetching } = useQuery({
    queryKey: [GET_CHECK_AUTHENTICATED],
    queryFn: () => AuthAPI.checkAuthReq(),
    retry: false,
    refetchOnWindowFocus: false,
    select: (data) => {
      return data.message;
    },
  });

  const { data: user, isFetching: isGetAuthUserFetching } = useQuery({
    queryKey: [GET_AUTHENTICATED_USER],
    queryFn: () => UserAPI.getLoggedInUser(),
    retry: false,
    refetchOnWindowFocus: false,
    enabled: !!isAuthenticated,
  });

  const { mutate: loginReq } = useMutation({
    mutationFn: (data: LogInBody) => AuthAPI.login(data),
    onSuccess: () => {
      navigate("/login-info");
      queryClient.invalidateQueries({ queryKey: [GET_CHECK_AUTHENTICATED] });
    },
    onError: (error) => {
      toaster.create({
        type: "error",
        description: error.error,
      });
    },
  });

  const { mutate: logoutReq } = useMutation({
    mutationFn: () => AuthAPI.logout(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_CHECK_AUTHENTICATED] });
      navigate("/");
      toaster.create({
        description: "You have been successfully logged out.",
        type: "success",
      });
    },
    onError: (error) => {
      toaster.create({
        type: "error",
        description: error.error,
      });
    },
  });

  const value: AuthContextType = {
    user: user || null,
    isAuthenticated: isAuthenticated || false,
    isLoading: isCheckAuthFetching || isGetAuthUserFetching,
    loginReq,
    logoutReq,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
