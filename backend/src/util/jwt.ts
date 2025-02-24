import jwt from "jsonwebtoken";
import env from "./envalidEnv";
import { UserDocument } from "../models/user.model";

export const signAccessToken = (userId: UserDocument["_id"]) =>
  jwt.sign({ userId }, env.JWT_ACCESS_TOKEN_SECRET, {
    expiresIn: "30m",
  });

export const signRefreshToken = (userId: UserDocument["_id"]) =>
  jwt.sign({ userId }, env.JWT_REFRESH_TOKEN_SECRET, {
    expiresIn: "30d",
  });
