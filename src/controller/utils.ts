import { branch } from "../model/branch";
import { Request, Response } from "express";
import { semester } from "../model/semester";

export const createBranch = async (req: Request, res: Response) => {
    try {
        console.log(`CREATE BRANCH QUERY STARTED`);
        const { name, code, branchNumber} = req.body;
        const response = new branch({name, code, branchNumber});
        const branchData = await response.save();
        res.status(201);
        console.log(`CREATE BRANCH - SUCCESSFULL -> ${branchData}`);
        res.send(branchData);
    } catch (error) {
        console.log(`CREATE BRANCH - FAILED - ${error}`);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const getAllBranch = async (req: Request, res: Response) => {
    try {
        console.log(`GET ALL BRANCHS QUERY STARTED`);

        const response = await branch.find();
        res.status(201);
        console.log(`GET ALL BRANCHS - SUCCESSFULL -> ${response}`);
        res.send(response);
    }
    catch (error){
        console.log(`GET ALL BRANCHs - FAILED - ${error}`);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const createSemester = async (req: Request, res: Response) => {
    try {
        console.log(`CREATE SEMESTER QUERY STARTED`);
        const { name, code} = req.body;
        const response = new semester({name, code});
        const semesterData = await response.save();
        res.status(201);
        console.log(`CREATE SEMESTER - SUCCESSFULL -> ${semesterData}`);
        res.send(semesterData);
    } catch (error) {
        console.log(`CREATE SEMESTER - FAILED - ${error}`);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const getAllSemester = async (req: Request, res: Response) => {
    try {
        console.log(`GET ALL SEMESTERS QUERY STARTED`);

        const response = await semester.find();
        res.status(201);
        console.log(`GET ALL SEMESTERS - SUCCESSFULL -> ${response}`);
        res.send(response);
    }
    catch (error){
        console.log(`GET ALL SEMESTERS - FAILED - ${error}`);
        res.status(500).json({ error: 'Internal server error' });
    }
}