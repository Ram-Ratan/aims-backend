import { course } from "../model/course";
import { Request, Response } from "express";
import { studentCourse } from "../model/studentCourse";

export const getAllCoursesBySemester = async (req: Request, res: Response) => {
    try {
        const { semId } = req.query;
        console.log(`GET ALL COURSES BY SEM QUERY STARTED - ${semId}`);
        const courseData = await course.find({semester: semId}).populate('semester');
        res.status(201);
        console.log(`GET ALL COURSES BY SEM - SUCCESSFULL -> ${courseData}`);
        res.send(courseData);
    } catch (error) {
        console.log(`GET ALL COURSES BY SEM - FAILED - ${error}`);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const getAllCourses = async (req: Request, res: Response) => {
    try {
        console.log(`GET ALL COURSES QUERY STARTED`);
        const courseData = await course.find();
        res.status(201);
        console.log(`GET ALL COURSES - SUCCESSFULL -> ${courseData}`);
        res.send(courseData);
    } catch (error) {
        console.log(`GET ALL COURSES - FAILED - ${error}`);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const createCourse =async (req:Request, res: Response) => {
    try {
        const { courseName, courseCode, semId } = req.body;
        const response = new course({courseName, courseCode, semester: semId});
        const courseData = await response.save();
        res.status(201);
        console.log(`CREATE COURSE - SUCCESSFULL -> ${courseData}`);
        res.send(courseData);
    } catch (error) {
        console.log(`CREATE COURSE - FAILED - ${error}`);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const courseRegistration =async (req:Request, res: Response) => {
    try {
        console.log(`COURSE RESGISTRATION Query Started`);
        const body = req.body;
        const registrationData = await studentCourse.create(body);
        res.status(201);
        console.log(`COURSE REGISTRATION- SUCCESSFULL -> ${registrationData}`);
        res.send(registrationData);
    } catch (error) {
        console.log(`COURSE RESGISTRATION - FAILED - ${error}`);
        res.status(500).json({ error: 'Internal server error' });
    }
}