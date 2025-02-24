import { Router } from "express";
import {
  registerHandler,
  verifyAccountHandler,
  resendActivationHandler,
  forgotPasswordHandler,
  resetPasswordHandler,
  loginHandler,
  isUserUniqueHandler,
} from "../controllers/auth.controller";

const authRoutes = Router();

authRoutes.post("/register", registerHandler);
authRoutes.get("/verify-account/:token", verifyAccountHandler);
authRoutes.post("/resend-activation", resendActivationHandler);
authRoutes.post("/forgot-password", forgotPasswordHandler);
authRoutes.post("/reset-password/:token", resetPasswordHandler);
authRoutes.post("/login", loginHandler);
authRoutes.post("/is-user-unique", isUserUniqueHandler);

export default authRoutes;
