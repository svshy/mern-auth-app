import mongoose, { Document } from "mongoose";
import { validateEmail, validatePassword } from "../util/validators";
import createHttpError from "http-errors";
import { compareValue, hashValue } from "../util/bcrypt";

export interface UserDocument extends Document {
  _id: mongoose.Types.ObjectId;
  login: string;
  email: string;
  password: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<UserDocument>(
  {
    login: {
      type: String,
      required: [true, "Login is required!"],
      unique: true,
      lowercase: true,
      trim: true,
      minlength: [3, "Login must be at least 3 characters long."],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validateEmail, "Invalid email"],
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  if (!validatePassword(this.password)) {
    return next(
      createHttpError(
        400,
        "Password must contain at least 8 characters, including one uppercase letter, one number, and one special character."
      )
    );
  }
  this.password = await hashValue(this.password);

  return next();
});

userSchema.methods.comparePassword = async function (val: string) {
  return compareValue(val, this.password);
};

const UserModel = mongoose.model<UserDocument>("User", userSchema);
export default UserModel;
