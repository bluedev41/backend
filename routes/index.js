import express from "express";
import { getUsers, getUserById, saveUser, 
    updateUser, deleteUser } from "../controllers/UserController.js";
import { getDataById_range,  getAggregateById_range, 
        getTotalAggregateById,saveUserWorkingData,
      updateUserWorkingData,  deleteUserWorkingData } from "../controllers/UserStatisticController.js";

import {
    calculate,
    getFormulas,
    getFormulaById,
    saveFormula,
    updateFormula,
    deleteFormula
} from "../controllers/FormulaController.js"
 
import {
    
    getSalaryLists,
    getSalaryListById,
    saveSalaryList,
    updateSalaryList,
    deleteSalaryList
} from "../controllers/SalaryListController.js"

const router = express.Router();

/* 
    user curd router
*/
router.get('/users', getUsers);                                     // Get all user 
router.get('/users/:id', getUserById);                              // Get one user by id        
router.post('/users', saveUser);                                    // Create new user
router.patch('/users/:id', updateUser);                             // Update user        
router.delete('/users/:id', deleteUser);                            // Delete user 
 
/* 
    user working data router
*/

router.post('/get_userdata_range/:id', getDataById_range);          // get all data of employee on given date range
router.post('/aggregate_range/:id', getAggregateById_range);        // aggregating employee's data on given date range
router.get('/get_aggregate/:id', getTotalAggregateById);           // aggregate employee data on today, this week, and this month
router.post('/user_daily_report', saveUserWorkingData);            // store employee's daily working data
router.patch('/user_daily_report/:id', updateUserWorkingData);     // update employee's daily working data
router.delete('/user_daily_report/:id', deleteUserWorkingData);    // update employee's daily working data

/*
    formula curd router
*/

router.get('/formula', getFormulas);                               //Get all formulas
router.get('/formula/:id', getFormulaById);                        //Get one formula
router.post('/formula', saveFormula);                              // Create Formula
router.patch('/formula/:id', updateFormula);                       // Update Formula
router.delete('/formula/:id', deleteFormula);                       // Delete Formula

/* 
    salary list router
*/
router.post('/calculate/:id', calculate);
router.get('/salaryList', getSalaryLists);                               //Get all salary lists
router.get('/salaryList/:id', getSalaryListById);                        //Get one salary lists
router.post('/salaryList', saveSalaryList);                              // Create salary lists
router.patch('/salaryList/:id', updateSalaryList);                       // Update salary lists
router.delete('/salaryList/:id', deleteSalaryList);                       // Delete salary lists

export default router;