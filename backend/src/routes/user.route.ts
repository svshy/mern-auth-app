import { Router } from "express";
import { authenticate } from "../middlewares/authenticate";
import { getAuthenticatedUser } from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.get("/", authenticate, getAuthenticatedUser);

export default userRoutes;
