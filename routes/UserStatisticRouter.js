import express from "express";
import { 
    getUsers, 
    getUserById,
    saveUser,
    updateUser,
    deleteUser
} from "../controllers/UserStatisticController.js";
 
const router = express.Router();
 
router.get('/users', getUsers);
router.get('/users/statistic/:id', getUserById);
router.post('/users', saveUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
 
export default router;