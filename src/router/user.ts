import express from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../controller/user";

const userServiceRouter = express.Router();

userServiceRouter.route("/:id").get(getUsers);
userServiceRouter.route("/create-user").post(createUser);
userServiceRouter.route("/update-user/:id").patch(updateUser);
userServiceRouter.route("/delete-user").delete(deleteUser);

export default userServiceRouter;