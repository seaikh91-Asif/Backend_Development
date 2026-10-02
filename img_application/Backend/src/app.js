const express = require('express'); 
const multer = require('multer'); 
const uploadFile = require('./service/storage.service');

const app = express(); 
app.use(express.json()); 

const uplode = multer({storage: multer.memoryStorage()})



app.post('/create-post', uplode.single("image"),  async (req, res) => {
    console.log(req.body); 
    console.log(req.file); 

    try {
        // ekhane buffer er sathe originalname tao pass korlam
        const result = await uploadFile(req.file.buffer, req.file.originalname); 
        console.log(result); 
        res.json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: "Upload failed" });
    }
})

module.exports = app; 