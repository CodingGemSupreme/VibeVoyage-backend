// ** Dependencies **
const express = require("express");
const videosRouter = express.Router();
const Video = require("../models/videos");

// ** Routes **
// Index
videosRouter.get("/Videos", async (req, res) => {
    try {
        // send all notes
        res.json(await Video.find({}));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
})

// Create
videosRouter.post('/Videos', async (req, res)=>{
    try{
        res.json(await Video.create(req.body))
    } catch (error){
        res.status(400).json(error)
    }
})

// Delete
videosRouter.delete('/:id', async (req, res)=>{
    try{
        res.json(await Video.findByIdAndDelete(req.params.id))
    } catch(error){
        res.status(400).json(error)
    }
})

module.exports = videosRouter;