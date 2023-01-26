import mongoose from "mongoose";

const userWorkingSchema = mongoose.Schema({
  /* employee id */   
   user_id: {
     
            type: mongoose.Schema.Types.ObjectId, 
            ref: "users" 
          },
   /* report date */
   date: {
        type: Date,
        required: true,
        unique: true
   },
   /* attendance status(1/0) */
   attendance: {
        type: Number,
        default: 0,
        max: 1,
        min: 0
   },
   /* abaenteeism status(1/0) */
   absenteeism: {
        type: Number,
        default: 0,
        max: 1,
        min: 0
   },
   /* early status(1/0) */
   early: {
        type: Number,
        default: 0,
        max: 1,
        min: 0
   },
   /* late status(1/0) */
   late: {
        type: Number,
        default: 0,
        max: 1,
        min: 0
   },
   /* illness status(1/0) */
   ill: {
        type: Number,
        default: 0,
        max: 1,
        min: 0
   },
   /* working time per day */
   working_time: {
        type: Number,
        required: true,
        min: 0,
   },
   /* overtime per day */
   overtime: {
        type: Number,
        min: 0
   }
});

export default mongoose.model('working_datas', userWorkingSchema);