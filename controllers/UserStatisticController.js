import UserData from "../models/UserWorkingTime.js";
 
export const getUserStatisticById = async (req, res) => {
    try {
        const user = await UserData.findById(req.params.id).find({
            data: {
                $gte: req.body.start,
                $lt: req.body.end
            }
        });
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
export const saveUserWorkingData = async (req, res) => {
    const user = new UserData(req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const updateUser = async (req, res) => {
    try {
        const updateduser = await UserData.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const deleteUser = async (req, res) => {
    try {
        const deleteduser = await UserData.deleteOne({_id:req.params.id});
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}