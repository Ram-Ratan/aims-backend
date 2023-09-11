import express from "express";
import { getUsers } from "../controller/user";

const userServiceRouter = express.Router();

userServiceRouter.route("/:id").get(getUsers);

export default userServiceRouter;