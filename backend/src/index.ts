import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToDatabase from "./config/connectDb";
import authRoutes from "./routes/auth.route";
import { errorHandler } from "./middlewares/errorHandler";
import createHttpError from "http-errors";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT;
const mongoUri = process.env.MONGO_URI;
const appOrigin = process.env.APP_ORIGIN;
app.use(express.json());
app.use(
  cors({
    origin: appOrigin,
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

app.use(errorHandler);

app.listen(port, async () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  try {
    if (!port || !mongoUri) {
      console.error(
        "[server]: Port or MongoDB URI is undefined. Please provide valid values."
      );
      process.exit(1);
    }
    await connectToDatabase(mongoUri);
    console.log("[server]: Successfully connected to the database");
  } catch (error) {
    console.error("[server]: Failed to connect to the database:", error);
    process.exit(1);
  }
});
