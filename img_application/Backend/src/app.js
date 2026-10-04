const express = require('express'); 
const multer = require('multer'); 
const uploadFile = require('./service/storage.service');
const postModel = require("./models/post.model")
const cors = require("cors")

const app = express(); 
app.use(cors()); 
app.use(express.json()); 

const uplode = multer({storage: multer.memoryStorage()})



app.post('/create-post', uplode.single("image"),  async (req, res) => {
    console.log(req.body); 
    console.log(req.file); 

    try {
        
        const result = await uploadFile(req.file.buffer, req.file.originalname); 

        const post = await postModel.create({
            image:result.url,
            caption:req.body.caption
        })

        return res.status(201).json({
            message:"Post Created Succesfully",
            post
        })

    } catch (error) {
        console.log("Real Error is:", error); 
        res.status(500).json({ success: false, message: "Upload failed" });
    }
    
})

app.get("/posts", async (req, res) => {
    try {
        const posts = await postModel.find();

        return res.status(200).json({
            message: "Posts fetched succesfully",
            posts
        });
    } catch (error) {
        console.log("Error fetching posts:", error);
        return res.status(500).json({ 
            success: false, 
            message: "Failed to fetch posts" 
        });
    }
});

module.exports = app; 