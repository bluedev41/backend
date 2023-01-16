import express from "express";
import { getUsers, getUserById, saveUser, updateUser, deleteUser } from "../controllers/UserController.js";
import {getUserStatisticById, saveUserWorkingData } from "../controllers/UserStatisticController.js";
 
const router = express.Router();

// user curd router

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', saveUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
 
// user working data router

router.post('/users/statistic/:id', getUserStatisticById);
router.post('/users/daily_report/:id', saveUserWorkingData);

export default router;