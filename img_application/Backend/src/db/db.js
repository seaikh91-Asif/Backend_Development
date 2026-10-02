const mongoose = require("mongoose")

async function connectDB(){
    await mongoose.connect("mongodb+srv://yt:oAAc2mRSH6oSdYOC@cluster0.ghoqgki.mongodb.net/image_Application")

    console.log("Connected to Database")
}

module.exports = connectDB; 