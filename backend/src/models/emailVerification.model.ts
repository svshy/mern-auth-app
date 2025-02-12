import mongoose from "mongoose";

export interface EmailVerificationDocument extends Document {
  userId: mongoose.Types.ObjectId;
  token: string;
  createdAt: Date;
}

const emailVerificationSchema = new mongoose.Schema<EmailVerificationDocument>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  token: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now, expires: "24h" },
});

const EmailVerificationModel = mongoose.model<EmailVerificationDocument>(
  "EmailVerification",
  emailVerificationSchema,
  "emailVerificationTokens"
);
export default EmailVerificationModel;
