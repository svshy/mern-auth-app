import { Router } from "express";
import {
  registerHandler,
  verifyAccountHandler,
  resendActivationHandler,
} from "../controllers/auth.controller";

const authRoutes = Router();

authRoutes.post("/register", registerHandler);
authRoutes.get("/verify-account", verifyAccountHandler);
authRoutes.post("/resend-activation", resendActivationHandler);

export default authRoutes;
