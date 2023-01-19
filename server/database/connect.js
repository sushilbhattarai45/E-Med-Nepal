import mongoose from "mongoose";

export const connectDB = async (req, res) => {
  try {
    const url = process.env.MONGO_URL;
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected : ${conn.connection.host}`);
  } catch (error) {
    console.log("Database error: " + error);
  }
};
