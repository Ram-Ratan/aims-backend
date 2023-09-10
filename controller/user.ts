export const getUsers =async (req: any, res: any) => {
    res.status(200).json({ msg: "I am the user" });
    console.log(`${JSON.stringify(req.data)}`);
}