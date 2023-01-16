import mongoose from "mongoose";

const userWorkingScama = mongoose.Schema({
   user_id: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "users" 
          },
   date: {
        type: Date,
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
 
export default mongoose.model('working_datas', userWorkingScama);