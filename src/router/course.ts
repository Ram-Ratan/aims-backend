import express from "express";
import { courseRegistration, createCourse, getAllCoursesBySemester } from "../controller/course";

const courseServiceRouter = express.Router();

courseServiceRouter.route("/create-course").post(createCourse);
courseServiceRouter.route("/get-courses-by-sem").get(getAllCoursesBySemester);
courseServiceRouter.route("/course-registration").post(courseRegistration);

export default courseServiceRouter;