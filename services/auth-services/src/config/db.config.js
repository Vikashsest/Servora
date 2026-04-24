import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/SERVORAAuth",
    );

    console.log("DB connection Successfully");
  } catch (error) {
    console.log("database connection failed");
  }
};

export default connectDB;
