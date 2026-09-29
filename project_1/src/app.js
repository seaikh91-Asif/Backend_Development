const express = require('express'); 
const noteModel = require('./models/note.model')

const app = express(); 
app.use(express.json()); 
/*
 POST /notes 

 */

 app.post("/notes",async (req, res) => {
    const data = req.body
    await noteModel.create({
        title: data.title, 
        description: data.description
    })

    res.status(201).json({
        message:"Note Created"
    })
 })

 app.get("/notes", async(req, res) => {
    const notes = await noteModel.find(); 

    res.status(200).json({
        message: "Notes fetched succesfully",
        notes: notes // ekhon eta thik bhabe kaj korbe
    })
});

app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message:"Note Delted Succesfully"
    })
})

app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id
     
    const description = req.body.description
    await noteModel.findOneAndUpdate({_id:id}, {description:description})

    res.status(200).json({
        message:"Note updated succesfully"
    })
})


module.exports = app
