import express from "express";
import mongoose, { mongo } from "mongoose";
import { user } from "../model/user";
import userServiceRouter from "../router/user";

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://priyankjeetpradhan111:gcBlA5KV8PSI4dRO@cluster0.guttbit.mongodb.net/?retryWrites=true&w=majority");

// async function insert() {
//   await user.create({
//     name: "Priyankjeet Pradhan",
//     email: "priyankjeetpradhan111@gmail.com"
//   })
// }

// insert();

app.use("/api/user", userServiceRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});