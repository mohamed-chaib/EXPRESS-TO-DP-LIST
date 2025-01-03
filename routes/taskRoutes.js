const express = require("express")
const router = express.Router();
const task  = require("../models/task.js")

router.get("/tasks",async(req,res)=>{
    try {
        const tasks = await task.find();
        res.status(200).json(tasks)
    } catch (err) {

        res.status(500).json({error : err.message })
    }
})

router.post("/tasks", async (req, res) => {
    try {
        let newTask = new task(req.body); 
        await newTask.save();
        res.status(200).json({message: "created successfully", taseek: newTask});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});
router.put("/tasks/:id", async (req, res) => {
    try {
        const {id} = req.params
        const dataToUpdate = req.body 
        const updatedTask =   await task.findByIdAndUpdate(id,dataToUpdate,{new : true});
        res.status(204).json({message: "updated successfully", taask: updatedTask});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});
router.delete("/tasks/:id", async (req, res) => {
    try {
        const {id} = req.params
          await task.findByIdAndDelete(id);
        res.status(200).json({message: "deleted"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

module.exports = router