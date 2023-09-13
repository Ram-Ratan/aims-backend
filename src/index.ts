import { configDotenv } from "dotenv";
import express from "express";
import mongoose, { mongo } from "mongoose";
import { user } from "./model/user";
import userServiceRouter from "./router/user";

configDotenv();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL || "myurl").then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });;

app.use("/api/user", userServiceRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});