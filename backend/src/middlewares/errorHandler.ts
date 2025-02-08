import { ErrorRequestHandler } from "express";
import { isHttpError } from "http-errors";
import { Error as MongooseError } from "mongoose";

export const errorHandler: ErrorRequestHandler = (
  error: unknown,
  req,
  res,
  next
) => {
  console.error(error);
  let errorMessage = "An unknown error occurred";
  let statusCode = 500;

  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  } else if (error instanceof MongooseError.ValidationError) {
    statusCode = 400;
    const firstErrorKey = Object.keys(error.errors)[0];
    const firstError = error.errors[firstErrorKey];
    errorMessage = firstError.message;
  } else if (error instanceof MongooseError.CastError) {
    statusCode = 400;
    errorMessage = "Invalid ID format";
  } else if (
    error instanceof Error &&
    "code" in error &&
    error.code === 11000
  ) {
    statusCode = 409;
    errorMessage = "Duplicate key error";

    const keyPattern = (error as any).keyPattern;
    if (keyPattern) {
      const duplicateKey = Object.keys(keyPattern)[0];
      errorMessage = `Duplicate value for ${duplicateKey}`;
    }
  }

  res.status(statusCode).json({ error: errorMessage });
};
