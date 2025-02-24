import { RequestHandler } from "express";
import UserModel from "../models/user.model";
import EmailVerificationModel from "../models/emailVerification.model";
import mongoose from "mongoose";
import {
  sendResetPasswordEmail,
  sendVerifyAccountEmail,
} from "../util/sendEmail";
import { generateToken, hashToken } from "../util/cryptoToken";
import createHttpError from "http-errors";
import { fifteenMinutesBeforeNow } from "../util/date";
import ResetPasswordModel from "../models/resetPassword.model";
import { hashValue } from "../util/bcrypt";
import { validatePassword } from "../util/validators";
import { signAccessToken, signRefreshToken } from "../util/jwt";
import { setAuthCookies } from "../util/cookies";

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

    res.sendStatus(201);
  } catch (error) {
    await session.abortTransaction();
    next(error);
  } finally {
    session.endSession();
  }
};

interface IsUserUniqueBody {
  login?: string;
  email?: string;
}

export const isUserUniqueHandler: RequestHandler<
  unknown,
  unknown,
  IsUserUniqueBody,
  unknown
> = async (req, res, next) => {
  const { login, email } = req.body;

  if (!email && !login) {
    return next(createHttpError(400));
  }
  try {
    let isUnique = true;

    if (login) {
      const user = await UserModel.findOne({ login: login });
      if (user) {
        isUnique = false;
      }
    }

    if (email && isUnique) {
      const user = await UserModel.findOne({ email: email });
      if (user) {
        isUnique = false;
      }
    }

    res.status(200).json({ isUnique });
  } catch (error) {
    next(error);
  }
};

interface VerifyAccountParams {
  token: string;
}

export const verifyAccountHandler: RequestHandler<
  VerifyAccountParams,
  unknown,
  unknown,
  unknown
> = async (req, res, next) => {
  const { token } = req.params;

  if (!token) {
    return next(createHttpError(400, "Invalid verification token."));
  }
  try {
    const hashedToken = await hashToken(token);
    const validToken = await EmailVerificationModel.findOne({
      token: hashedToken,
    });

    if (!validToken) {
      return next(
        createHttpError(404, "Invalid or expired verification token.")
      );
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      validToken.userId,
      {
        isVerified: true,
      },
      { new: true }
    );

    if (!updatedUser) {
      return next(createHttpError(500, "Failed to verify account"));
    }

    await EmailVerificationModel.deleteMany({
      userId: updatedUser._id,
    });

    res.sendStatus(200);
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

  if (!email) {
    return next(createHttpError(400, "Please provide an email address."));
  }
  try {
    const user = await UserModel.findOne({
      email: email,
    });

    if (user && !user.isVerified) {
      const currentToken = await EmailVerificationModel.findOne({
        userId: user._id,
      }).sort({ createdAt: -1 });

      if (currentToken && currentToken.createdAt > fifteenMinutesBeforeNow()) {
        return next(
          createHttpError(
            429,
            "Please wait for some time before sending another activation link."
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
    }

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

interface ForgotPasswordBody {
  email: string;
}

export const forgotPasswordHandler: RequestHandler<
  unknown,
  unknown,
  ForgotPasswordBody,
  unknown
> = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return next(createHttpError(400, "Please provide an email address."));
  }

  try {
    const user = await UserModel.findOne({
      email: email,
    });

    const resetPasswordToken = await generateToken();
    const resetPasswordHashedToken = await hashToken(resetPasswordToken);

    if (user && user.isVerified) {
      const currentToken = await ResetPasswordModel.findOne({
        userId: user._id,
      }).sort({ createdAt: -1 });

      if (currentToken && currentToken.createdAt > fifteenMinutesBeforeNow()) {
        return next(
          createHttpError(
            429,
            "Please wait for some time before sending another password reset link."
          )
        );
      }

      await ResetPasswordModel.deleteMany({ userId: user._id });

      const token = await ResetPasswordModel.create({
        userId: user._id,
        token: resetPasswordHashedToken,
      });

      if (token) {
        await sendResetPasswordEmail(user.email, resetPasswordToken);
      }
    }
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

interface ResetPasswordBody {
  password: string;
}

interface ResetPasswordParams {
  token: string;
}

export const resetPasswordHandler: RequestHandler<
  ResetPasswordParams,
  unknown,
  ResetPasswordBody,
  unknown
> = async (req, res, next) => {
  const { password } = req.body;
  const { token } = req.params;

  if (!token || !password) {
    return next(createHttpError(400, "No token or password provided."));
  }

  try {
    const hashedToken = await hashToken(token);
    const validToken = await ResetPasswordModel.findOne({
      token: hashedToken,
    });

    if (!validToken) {
      return next(
        createHttpError(404, "Invalid or expired reset password token.")
      );
    }

    if (!validatePassword(password)) {
      return next(
        createHttpError(
          400,
          "Password must contain at least 8 characters, including one uppercase letter, one number, and one special character."
        )
      );
    }
    const newHashedPassword = await hashValue(password);

    const updatedUser = await UserModel.findByIdAndUpdate(
      validToken.userId,
      {
        password: newHashedPassword,
      },
      { new: true }
    );

    if (!updatedUser) {
      return next(createHttpError(500, "Failed to change password"));
    }

    await ResetPasswordModel.deleteMany({ userId: updatedUser._id });

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

interface LoginBody {
  login: string;
  password: string;
}

export const loginHandler: RequestHandler<
  unknown,
  unknown,
  LoginBody,
  unknown
> = async (req, res, next) => {
  const { login, password } = req.body;

  const user = await UserModel.findOne({ login: login });

  if (!user) {
    return next(createHttpError(401, "Invalid credentials"));
  }

  const isPasswordValid = await user.comparePassword(password);

  if (!isPasswordValid) {
    return next(createHttpError(401, "Invalid credentials"));
  }

  const accessToken = signAccessToken(user._id);
  const refreshToken = signRefreshToken(user._id);

  setAuthCookies({ res, accessToken, refreshToken })
    .status(200)
    .json({ message: "Login successful" });
};
