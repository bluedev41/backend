import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/index.js";

const port = 4200;

const app = express();
mongoose.connect('mongodb://localhost:27017/salary_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));
app.use(cors());
app.use(express.json());
app.use(UserRoute);
 
app.listen(port, ()=> console.log('Server up and running...'));