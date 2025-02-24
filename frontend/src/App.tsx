import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import VerifyAccountPage from "./pages/VerifyAccountPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import { Toaster } from "./components/ui/Toaster/Toaster";
import ResendActivationPage from "./pages/ResendActivationPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

export default function Page() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/verify-account/:token"
            element={<VerifyAccountPage />}
          />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route
            path="/resend-verification"
            element={<ResendActivationPage />}
          />
          <Route
            path="/reset-password/:token"
            element={<ResetPasswordPage />}
          />
        </Route>
      </Routes>
    </>
  );
}
