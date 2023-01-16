import UserData from "../models/UserWorkingModel.js";
 
/*
 get employee's working data in a given date range
*/

export const getUserStatisticById = async (req, res) => {
    try {
        const userdata = await UserData.find({ 
            user_id: ObjectId(req.body.user_id),
            date: {
                $gte: new Date(req.body.start),
                $lt: new Date(req.body.end)
            }
        });
        res.json(userdata);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
/*
 Insert employee's daily working data
*/

export const saveUserWorkingData = async (req, res) => {

    console.log('dd');

    // const userdata = new UserData(req.body);
    // try {
    //     const inserted = await userdata.save();
    //     res.status(201).json(inserted);
    // } catch (error) {
    //     res.status(400).json({message: error.message});
    // }
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