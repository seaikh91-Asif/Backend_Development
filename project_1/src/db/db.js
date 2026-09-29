const mongoose = require('mongoose'); 

async function connectDB() {
    await mongoose.connect("mongodb+srv://yt:oAAc2mRSH6oSdYOC@cluster0.ghoqgki.mongodb.net/halley")

    console.log("connected to DB")
}

module.exports = connectDB
