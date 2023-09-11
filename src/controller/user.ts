import { user } from "../model/user";

export const getUsers = async (req: any, res: any) => {
    const { id } = req.params;
    const userData = await user.findById(id);
    console.log(`${JSON.stringify(userData)}`);

    return userData;
}
