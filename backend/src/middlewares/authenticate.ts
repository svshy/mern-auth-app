import { RequestHandler } from "express";
import createHttpError from "http-errors";

export const authenticate: RequestHandler = (req, res, next) => {
  if (req.session.userId) {
    return next();
  } else {
    return next(createHttpError(401, "User not authenticated"));
  }
};
