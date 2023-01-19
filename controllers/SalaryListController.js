import List from "../models/SalaryListModel.js";

/*
Getting  all salary lists
*/
export const getSalaryLists = async (req, res) => {
    try {
        const lists = await List.find();
        res.json(lists);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
/*
Getting  one salary list
*/
export const getSalaryListById = async (req, res) => {
    try {
        const list = await List.findById(req.params.id);
        res.json(list);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
/*
Create salary list
*/
export const saveSalaryList = async (req, res) => {
    const list = new List(req.body);
    try {
        const insertedlist = await list.save();
        res.status(201).json(list);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
/*
Updating  salary lists
*/
export const updateSalaryList = async (req, res) => {
    try {
        const updatedlist = await List.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedlist);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
/*
deleting  salary lists
*/
export const deleteSalaryList = async (req, res) => {
    try {
        const deletedlist = await List.deleteOne({_id:req.params.id});
        res.status(200).json(deletedlist);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}