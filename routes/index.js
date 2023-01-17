import express from "express";
import { 
    getUsers, 
    getUserById, 
    saveUser, 
    updateUser, 
    deleteUser 
} from "../controllers/UserController.js";
import {
    getDataById_range, 
    getAggregateById_range,
    getTotalAggregateById, 
    saveUserWorkingData, 
    updateUserWorkingData, 
    deleteUserWorkingData  
} from "../controllers/UserStatisticController.js";
 
const router = express.Router();

// user curd router

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', saveUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
 
// user working data router

router.post('/get_userdata_range/:id', getDataById_range);          // get all data of employee on given data range
router.post('/aggregate_range/:id', getAggregateById_range);        // aggregating employee's data on given data range
router.get('/get_aggregate/:id', getTotalAggregateById);           // aggregate employee data weekly, monthly
router.post('/user_daily_report', saveUserWorkingData);            // store employee's daily working data
router.patch('/user_daily_report/:id', updateUserWorkingData);     // update employee's daily working data
router.delete('/user_daily_report/:id', deleteUserWorkingData);    // update employee's daily working data

export default router;