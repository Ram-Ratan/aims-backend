import { configDotenv } from "dotenv";
import express from "express";
import mongoose, { mongo } from "mongoose";
import userServiceRouter from "./router/user";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import utilServiceRouter from "./router/utils";
import courseServiceRouter from "./router/course";

configDotenv();
const app = express();
const port = 4000;

var cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URL || "myurl").then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });;

app.use("/api/user", userServiceRouter);
app.use("/api/utils", utilServiceRouter);
app.use("/api/course", courseServiceRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});