import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    username:{
        type:String, 
        required:[true, "Username is requird"], 
        unique: [true, "Usename must be unique"], 
    }, 
    
    email:{
        type:String,  
        required:[true, "email is required"],
        unique:[true, "Email must be unique"]
    }, 

    password:{
        type:String, 
        required:[true, "Password is required"]
    }
})

const userModel = mongoose.model("users", userShema)

export default userModel; 