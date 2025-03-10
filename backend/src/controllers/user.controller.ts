import { RequestHandler } from "express";
import UserModel from "../models/user.model";
import createHttpError from "http-errors";

export const getAuthenticatedUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.session.userId);
    if (!user) {
      return next(createHttpError(401, "User not authenticated"));
    }
    res.status(200).json({
      id: user._id,
      login: user.login,
      email: user.email,
    });
  } catch (error) {
    next(error);
  }
};
