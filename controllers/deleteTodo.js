//import the model
const Todo = require("../models/Todo");

//define route handler
exports.deleteTodo = async(req,res) => {
    try{
        //Parse todo items by id
        const {id} = req.params;

        const todo = await Todo.findByIdAndDelete(id);

        res.status(200)
        .json({
            success:true,
            data:todo,
            message:"Delete Successfully",
        })
    }
    catch(err){
       console.error(err);
       res.status(500)
       .json({
            success:false,
            error:err.message,
            message:"Server error",
       })
    }
}