import UserData from "../models/UserWorkingModel.js";
import mongoose from "mongoose";
var ObjectId = mongoose.Types.ObjectId; 
/*
    A function to aggregate all data in a given date range
*/

const aggregate_fuc = function(Schema, start, end, user) {
    return Schema.find({
        user_id: ObjectId(user),
             date: {
                $gte: new Date(start),
                $lte: new Date(end)
             }
    }).populate("user_id").exec();
    // return Schema.aggregate([
    //     { $match: { 
    //          user_id: ObjectId(user),
    //          date: {
    //             $gte: new Date(start),
    //             $lte: new Date(end)
    //          }
    //     } },
        // { 
            // $group: { 
            //     _id: "$user_id",       
            //     total_early: { $sum: "$early"},
            //     total_late: { $sum: "$late"},
            //     total_ill: { $sum: "$ill" },
            //     working_day: {$sum: "$attendance"},
            //     total_absenteeism: {$sum: "$absenteeism"},
            //     total_overtime: { $sum: "$overtime" },
            //     total_working_time: { $sum: "$working_time" },
            // } 
        // }
//     ]).exec();
}

/*
adding day function
*/

 const addDay = function(date, n) {
    date.setDate(date.getDate() + n);
    return date;
  }

/*
 get the all mondays
*/

const getMondays = function() {
    var d = new Date(),
        month = d.getMonth(),
        mondays = [];

    d.setDate(1);

    // Get the first Monday in the month
    while (d.getDay() !== 1) {
        d.setDate(d.getDate() + 1);
    }

    // Get all the other Mondays in the month
    while (d.getMonth() === month) {
        mondays.push(new Date(d.getTime()));
        d.setDate(d.getDate() + 7);
    }

    return mondays;
}

/*
 get employee's working data in a given date range
*/

export const getDataById_range = async (req, res) => {
    try {
        const data = await UserData.find({ 
            user_id: req.params.id,
            date: {
                $gte: new Date(req.body.start),
                $lte: new Date(req.body.end)
            }
        });
        res.json( data);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

 /*
 Getting employee's working data in a given date range
*/  

export const getAggregateById_range = async (req, res) => {
    try {
        let data = await aggregate_fuc(UserData, req.body.start, req.body.end, req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}


/*
 Getting employee's working data daily, weekly, and monthly
*/

export const getTotalAggregateById = async (req, res) => {
    try {

        let today = new Date();
        today.setHours(0, 0, 0, 0)
        let first = today.getDate() - today.getDay();
        let last = first + 6;
        let firstday = new Date(today.setDate(first)).toUTCString();
        let lastday = new Date(today.setDate(last)).toUTCString();
        let firstDayMonth = new Date(today.setDate(1));
        let lastDayMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)
        lastDayMonth.setHours(23, 59, 59, 0);
        today = new Date().setHours(0, 0, 0, 0);
        let daily_data = [];
        let week_data = [];

        let todaydata = await aggregate_fuc(UserData, new Date(today), new Date(today), req.params.id);      // aggregated data on today        

        for (let i = 0; i < 7; i++) {         
            daily_data[i] = await aggregate_fuc(UserData, addDay(new Date(firstday), i), addDay(new Date(firstday), i), req.params.id ) // aggregated data on each day of this month
          }        

        for (const index in getMondays()) {             
            week_data[index] = await aggregate_fuc(UserData, getMondays()[index], addDay(getMondays()[index], 6), req.params.id ) // aggregated data on every week of this month
          }       

        let monthlydata = await aggregate_fuc(UserData, firstDayMonth, lastDayMonth, req.params.id);      // aggregated data on this month
      
        res.json(
            {
                "today_data": todaydata,
                "data_on_day_of_this_week ": daily_data,
                "data_on_week_of_this_month": week_data,                
                "this_month_data": monthlydata
            }
        );  
       
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
/*
 Insert employee's daily working data
*/

export const saveUserWorkingData = async (req, res) => {
    const userdata = new UserData(req.body);
    try {
        const inserted = await userdata.save();
        res.status(201).json(inserted);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

/*
 Updating employee's working data
*/
 
export const updateUserWorkingData = async (req, res) => {
    try {
        const updateduser = await UserData.updateOne({user_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

/*
 Deleting employee's working data
*/
 
export const deleteUserWorkingData = async (req, res) => {
    try {
        const deleteduser = await UserData.deleteOne({user_id:req.params.id});
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}




