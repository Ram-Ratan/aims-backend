import { user } from "../model/user";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

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

export const signup = async (req: any, res: any) => {
    try {
        console.log(`SIGNUP USER STARTED`);
        const { name, email, password, isAdmin , isFaculty, isStudent} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const userInfo = new user({name, email, password: hashedPassword, isAdmin, isFaculty, isStudent});
        const response = await userInfo.save();
        res.status(201);
        console.log(`SIGNUP USER SUCCESSFUL - ${response}`);
        res.send(response);
        
    } catch (error) {
        console.log(`SIGNUP USER - FAILED - ${error}`);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const loginUser =async (req:Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const userInfo = await user.findOne({ email });

        if (!userInfo) {
            return res.status(401).send('Invalid email or password');
        }
        const passwordMatch = await bcrypt.compare(password, userInfo.password);

        if (!passwordMatch) {
        return res.status(401).send('Invalid username or password.');
        }
        const token = jwt.sign({ userId: userInfo._id }, 'aims-test-secret-key', {
            expiresIn: '1 day'
        });

        res.cookie('aims', token, { httpOnly: true });
        res.status(200).send(userInfo);
    } catch (error) {
        res.send(500).send('Error logging In');
    }
}
// export const deleteUser =async (req:any, res: any) => {
//     const userId = req.params;
//     const userInfo = await user.findByIdAndDelete(userId);
//     console.log(`DELETED USER - ${userInfo}`);
// }

// export const updateUser =async (req:any, res: any) => {
//     const userId = req.params;
//     const userInfo = await user.findByIdAndUpdate(userId, {...req.body});
//     console.log(`UPDATED INFO - ${userInfo}`);
// }