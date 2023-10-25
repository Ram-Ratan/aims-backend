import express from "express";
import { createBranch, createSemester, getAllBranch, getAllSemester } from "../controller/utils";

const utilServiceRouter = express.Router();

utilServiceRouter.route("/create-semester").post(createSemester);
utilServiceRouter.route("/create-branch").post(createBranch);
utilServiceRouter.route("/get-all-branchs").get(getAllBranch);
utilServiceRouter.route("/get-all-semesters").get(getAllSemester);

export default utilServiceRouter;