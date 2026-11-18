import mongoose from 'mongoose'; 
import config from '../config/config.js';

async function connectDB() {
    await mongoose.connect(config.MONGO_URI); 
    console.log("Connected to DB"); 
}

export default connectDB; 