import { user } from "../model/user";
import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        console.log(`GET USER QUERY STARTED - ${id}`);
        const userData = await user.findById(id);
        res.status(201);
        console.log(`GET USER - SUCCESSFULL -> ${userData}`);
        res.send(userData);
    } catch (error) {
        console.log(`GET USER - FAILED - ${error}`);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const createUser = async (req: any, res: any) => {
    try {
        console.log(`CREATE USER QUERY STARTED`);
        const { name, email, address } = req.body;
        const userInfo = new user({name, email, address});
        const response = await userInfo.save();
        res.status(201);
        console.log(`CREATE USER SUCCESSFUL - ${response}`);
        res.send(response);
        
    } catch (error) {
        console.log(`CREATE USER - FAILED - ${error}`);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const deleteUser =async (req:any, res: any) => {
    const userId = req.params;
    const userInfo = await user.findByIdAndDelete(userId);
    console.log(`DELETED USER - ${userInfo}`);
}

export const updateUser =async (req:any, res: any) => {
    const userId = req.params;
    const userInfo = await user.findByIdAndUpdate(userId, {...req.body});
    console.log(`UPDATED INFO - ${userInfo}`);
}