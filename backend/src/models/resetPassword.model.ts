import mongoose, { Document } from "mongoose";

export interface ResetPasswordDocument extends Document {
  userId: mongoose.Types.ObjectId;
  token: string;
  createdAt: Date;
}

const resetPasswordSchema = new mongoose.Schema<ResetPasswordDocument>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  token: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now, expires: "1h" },
});

const ResetPasswordModel = mongoose.model<ResetPasswordDocument>(
  "ResetPassword",
  resetPasswordSchema,
  "resetPasswordTokens"
);
export default ResetPasswordModel;
