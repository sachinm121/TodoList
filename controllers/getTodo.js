//import the model
const Todo = require("../models/Todo");

//define route handler
exports.getTodo = async(req,res) => {
    try{
        //fetch all todo items from database
        const todos = await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"All todos fetched",
        })
    }
    catch(err){
       console.error(err);
       res.status(500)
       .json({
            success:true,
            error:err.message,
            message:"Server error",
       })
    }
}

exports.getTodoById = async(req,res) => {
    try{
       //Parse todo item basis on id
       const id = req.params.id;

       const todo = await Todo.findById({_id : id});
        
       //data for given id not found
       if(!todo){
        return res.status(404).json({
            success:false,
            message:"No data found with given id",
        })
       }
       res.status(200)
       .json({
            success:true,
            data:todo,
            message:"Single todo fetched",
       })
    }
    catch(err){
       console.error(err);
       res.status(500)
       .json({
            success:true,
            error:err.message,
            message:"Server error",
       })
    }
}