import { Router } from "express";
import {
  registerHandler,
  verifyAccountHandler,
  resendActivationHandler,
  forgotPasswordHandler,
  resetPasswordHandler,
  isUserUniqueHandler,
  loginHandler,
  logoutHandler,
  checkAuthHandler,
} from "../controllers/auth.controller";

const authRoutes = Router();

authRoutes.post("/register", registerHandler);
authRoutes.get("/verify-account/:token", verifyAccountHandler);
authRoutes.post("/resend-activation", resendActivationHandler);
authRoutes.post("/forgot-password", forgotPasswordHandler);
authRoutes.post("/reset-password/:token", resetPasswordHandler);
authRoutes.post("/is-user-unique", isUserUniqueHandler);
authRoutes.post("/login", loginHandler);
authRoutes.post("/logout", logoutHandler);
authRoutes.get("/check-auth", checkAuthHandler);

export default authRoutes;
