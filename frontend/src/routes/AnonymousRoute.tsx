import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const AnonymousRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AnonymousRoute;
