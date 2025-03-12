import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./layout/Layout";
import VerifyAccountPage from "./pages/VerifyAccountPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import { Toaster } from "./components/ui/Toaster/Toaster";
import ResendActivationPage from "./pages/ResendActivationPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import globalRouter from "./utils/globalRouter";
import AnonymousRoute from "./routes/AnonymousRoute";
import NotFoundPage from "./pages/NotFoundPage";

export default function Page() {
  const navigate = useNavigate();
  globalRouter.navigate = navigate;

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/login"
            element={
              <AnonymousRoute>
                <LoginPage />
              </AnonymousRoute>
            }
          />
          <Route
            path="/register"
            element={
              <AnonymousRoute>
                <RegisterPage />
              </AnonymousRoute>
            }
          />
          <Route
            path="/verify-account/:token"
            element={
              <AnonymousRoute>
                <VerifyAccountPage />
              </AnonymousRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <AnonymousRoute>
                <ForgotPasswordPage />
              </AnonymousRoute>
            }
          />
          <Route
            path="/resend-verification"
            element={
              <AnonymousRoute>
                <ResendActivationPage />
              </AnonymousRoute>
            }
          />
          <Route
            path="/reset-password/:token"
            element={
              <AnonymousRoute>
                <ResetPasswordPage />
              </AnonymousRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}
