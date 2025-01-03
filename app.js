const express = require("express")
const mongoose = require("mongoose") 


const app = express()
const port = 3003
const taskRoutes = require("./routes/taskRoutes.js");
app.use(express.json());

mongoose
.connect("mongodb+srv://mohamedchaib964:dbPassword@cluster0.le6o8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
console.log("connected")

}) 
.catch(()=>{
    console.log("unconnected")

}) 
app.use(taskRoutes)
app.listen(port,()=>{
    console.log("connected")

})