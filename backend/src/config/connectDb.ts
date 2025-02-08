import mongoose from "mongoose";

const connectToDatabase = async (mongoUri: string) => {
  try {
    await mongoose.connect(mongoUri);
    console.log("Successfully connected to DB");
  } catch (error) {
    console.error("Could not connect to DB", error);
    process.exit(1);
  }
};
export default connectToDatabase;
