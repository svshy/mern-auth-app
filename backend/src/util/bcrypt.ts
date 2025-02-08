import bcrypt from "bcrypt";

export const hashValue = async (val: string, saltRounds?: number) =>
  bcrypt.hash(val, saltRounds || 10);
