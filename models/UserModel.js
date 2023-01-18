import mongoose from "mongoose"; 

const userSchema = mongoose.Schema({

    name:{ type: String, required: true },                      // name of employee
    email:{ type: String, required: true, unique: true, },      // email of employee
    gender:{ type: String, required: true, default: "Male" },     //gender of employee
    password:{ type: String, required: true, min: 6 }           //password of employee

});
export default mongoose.model('users', userSchema);