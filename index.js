const express = require("express");
//server initiate
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 8000;

// middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");

//mount the todo API routes
app.use("/api/v1", todoRoutes)

//Start server
app.listen(PORT, ()=>{
    console.log(`Server started successfully at ${PORT}`);
})

//connection to the database
const dbconnect  = require("./config/database");
dbconnect();

// ..default Route
app.get("/", (req,res) =>{
    res.send(`<h1>This is home page</h1>`)
})