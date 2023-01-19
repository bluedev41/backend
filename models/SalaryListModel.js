import mongoose from "mongoose"; 

const salaryListSchema = mongoose.Schema({
    name:{ type: String, required: true, unique: true },    // salary list name
    type:{type: String, default: "addition"}                //salary list type(addition/deduction)    
});

export default mongoose.model('salarylists', salaryListSchema);