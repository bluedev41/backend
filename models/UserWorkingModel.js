import mongoose from "mongoose";

const userWorkingSchema = mongoose.Schema({
   user_id: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "users" 
          },
   date: {
        type: Date,
        required: true,
        unique: true
   },
   early: {
        type: Number,
        required: true,
        max: 1,
        min: 0
   },
   late: {
        type: Number,
        required: true,
        max: 1,
        min: 0
   },
   attendance: {
        type: Number,
        required: true,
        max: 1,
        min: 0
   },
   ill: {
        type: Number,
        required: true,        
        max: 1,
        min: 0
   },
   working_time: {
        type: Number,
        required: true,
        min: 0,
   },
   overtime: {
        type: Number,
        required: true,
        min: 0
   }
});


export default mongoose.model('working_datas', userWorkingSchema);