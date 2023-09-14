import express from "express";
import { createUser, loginUser, getUsers } from "../controller/user";

const userServiceRouter = express.Router();

userServiceRouter.route("/:id").get(getUsers);
userServiceRouter.route("/signup").post(createUser);
userServiceRouter.route("/login").post(loginUser);
// userServiceRouter.route("/update-user/:id").patch(updateUser);
// userServiceRouter.route("/delete-user").delete(deleteUser);

export default userServiceRouter;