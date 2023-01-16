import express from "express";
import { 
    getUsers, 
    getUserById,
    saveUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";

import {
    getUserStatisticById,
} from "../controllers/UserStatisticController.js";
 
const router = express.Router();

// user curd router

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', saveUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
 
// statistic router

router.get('/users/statistic/:id', getUserStatisticById);

export default router;