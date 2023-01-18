import mongoose from "mongoose"; 

const salaryListSchema = mongoose.Schema({
    name:{ type: String, required: true, unique: true },  
    type:{type: String, default: "addition"}                    // name of addition funds
});

export default mongoose.model('salarylists', salaryListSchema);