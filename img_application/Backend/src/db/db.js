const mongoose = require("mongoose")

async function connectDB(){
    await mongoose.connect(process.env.DATABASE_URI)

    console.log("Connected to Database")
}

module.exports = connectDB; 