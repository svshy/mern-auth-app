import { RequestHandler } from "express";
import UserModel from "../models/user.model";
import EmailVerificationModel from "../models/emailVerification.model";
import mongoose from "mongoose";
import { sendVerifyAccountEmail } from "../util/sendEmail";
import { generateToken, hashToken } from "../util/cryptoToken";
import createHttpError from "http-errors";
import { fifteenMinutesBeforeNow } from "../util/date";

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

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const [user] = await UserModel.create(
      [
        {
          email: email,
          login: login,
          password: password,
        },
      ],
      { session }
    );

    if (user) {
      const verificationEmailToken = await generateToken();
      const verificationEmailHashedToken = await hashToken(
        verificationEmailToken
      );

      const [token] = await EmailVerificationModel.create(
        [
          {
            userId: user._id,
            token: verificationEmailHashedToken,
          },
        ],
        { session }
      );
      if (token) {
        await sendVerifyAccountEmail(user.email, verificationEmailToken);
      }
    }

    await session.commitTransaction();

    res.status(201).json({
      message:
        "Account has been created. Please confirm your email by clicking the link in the sent email message.",
    });
  } catch (error) {
    await session.abortTransaction();
    next(error);
  } finally {
    session.endSession();
  }
};

interface VerifyAccountParams {
  token: string;
}

export const verifyAccountHandler: RequestHandler<
  unknown,
  unknown,
  unknown,
  VerifyAccountParams
> = async (req, res, next) => {
  const token = req.query.token;
  const hashedToken = await hashToken(token);

  try {
    const validToken = await EmailVerificationModel.findOne({
      token: hashedToken,
    });

    if (!validToken) {
      return next(
        createHttpError(404, "Invalid or expired verification token.")
      );
    }

    const updateUser = await UserModel.findByIdAndUpdate(
      validToken.userId,
      {
        isVerified: true,
      },
      { new: true }
    );

    if (!updateUser) {
      return next(createHttpError(500, "Failed to verify account"));
    }

    await EmailVerificationModel.deleteMany({
      userId: updateUser._id,
    });

    res
      .status(200)
      .json({ message: "Account has been verified. You can now log in." });
  } catch (error) {
    next(error);
  }
};

interface ResendActivationBody {
  email: string;
}

export const resendActivationHandler: RequestHandler<
  unknown,
  unknown,
  ResendActivationBody,
  unknown
> = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await UserModel.findOne({
      email: email,
    });

    if (!user) {
      return next(
        createHttpError(
          404,
          "No user exists for the provided email. Please register."
        )
      );
    }

    if (user.isVerified) {
      return next(
        createHttpError(409, "The email has already been activated.")
      );
    }

    const currentToken = await EmailVerificationModel.findOne({
      userId: user._id,
    }).sort({ createdAt: -1 });

    if (currentToken && currentToken.createdAt > fifteenMinutesBeforeNow()) {
      return next(
        createHttpError(
          429,
          "Please wait for some time before generating another token."
        )
      );
    }
    await EmailVerificationModel.deleteMany({ userId: user._id });

    const verificationEmailToken = await generateToken();
    const verificationEmailHashedToken = await hashToken(
      verificationEmailToken
    );

    const token = await EmailVerificationModel.create({
      userId: user._id,
      token: verificationEmailHashedToken,
    });

    if (token) {
      await sendVerifyAccountEmail(user.email, verificationEmailToken);
    }

    res.status(200).json({
      message:
        "The token has been generated and sent. Please check your email.",
    });
  } catch (error) {
    next(error);
  }
};
