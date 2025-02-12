import crypto from "crypto";

export const generateToken = async () => crypto.randomBytes(20).toString("hex");

export const hashToken = async (token: string) =>
  crypto.createHash("sha256").update(token).digest("hex");
