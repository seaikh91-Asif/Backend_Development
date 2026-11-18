import app from './src/app.js'; // This is the default import
import connectDB from './src/config/db.js'

connectDB(); 

app.listen(3000, () => {
    console.log("Server is running on port 3000"); 
});