import mongoose from "mongoose"; 

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: "john@mail.com",
        unique: true,
    },
    gender:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        min: 6
    }
});


export default mongoose.model('users', userSchema);