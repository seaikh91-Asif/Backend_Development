import dotenv from 'dotenv'
dotenv.config(); 

const required = ['MONGO_URI', 'JWT-SECRET', 'GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'GOOGLE_REFRESH_TOKEN']; 
required.forEach((key) => {
    if(!process.env[key]){
        throw new Error(`${key} is not defiend in enviornment variables`); 
    }
}); 

const config = {
    MONGO_URI : process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET, 
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID, 
    GOOGLE_CLIENT_TOKEN : process.env.GOOGLE_CLIENT_TOKEN,
    GOOGLE_USER : process.env.GOOGLE_USER
}

export default config; 