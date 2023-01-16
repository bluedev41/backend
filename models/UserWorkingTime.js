import mongoose from "mongoose";
 
const UserWorkingData = mongoose.Schema({
   users: {
            tppe: mongoose.Schema.Types.ObjectId, 
            ref: "Users" 
          },
   date: {
        type: String,
        required: true
   },
   early: {
        type: Number,
        required: true
   },
   late: {
        type: Number,
        required: true
   },
   working_time: {
        type: Number,
        required: true
   }
});
 
export default mongoose.model('UserWorkingData', UserWorkingData);