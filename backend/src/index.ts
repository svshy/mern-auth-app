import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectToDatabase from "./config/connectDb";
import authRoutes from "./routes/auth.route";
import { errorHandler } from "./middlewares/errorHandler";
import createHttpError from "http-errors";
import cors from "cors";
import env from "./util/envalidEnv";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: env.APP_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

app.use(errorHandler);

app.listen(env.PORT, async () => {
  console.log(`[server]: Server is running at http://localhost:${env.PORT}`);
  try {
    if (!env.PORT || !env.MONGO_URI) {
      console.error(
        "[server]: Port or MongoDB URI is undefined. Please provide valid values."
      );
      process.exit(1);
    }
    await connectToDatabase(env.MONGO_URI);
    console.log("[server]: Successfully connected to the database");
  } catch (error) {
    console.error("[server]: Failed to connect to the database:", error);
    process.exit(1);
  }
});
