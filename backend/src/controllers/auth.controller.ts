import { RequestHandler } from "express";
import UserModel from "../models/user.model";

interface SignUpBody {
  login: string;
  email: string;
  password: string;
}

export const registerHandler: RequestHandler<
  unknown,
  unknown,
  SignUpBody,
  unknown
> = async (req, res, next) => {
  const { login, email, password } = req.body;

  try {
    await UserModel.create({
      email: email,
      login: login,
      password: password,
    });
    res.status(201).json({ message: "The account has been created" });
  } catch (error) {
    next(error);
  }
};
