//import the model
const Todo = require("../models/Todo");

//define route handler
exports.updateTodo = async(req,res) => {
    try{
        // Parse todo item by id 
        const id = req.params.id;
        
        //Parse data from request body
        const {title, description} = req.body

        const todo = await Todo.findByIdAndUpdate(
            {_id : id},
            {title, description, updateAt:Date.now()}
        )

        //response
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:"Update Successfully",
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