//description - String
//description - Boolean

const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://RoseOginga:33243484@cluster0.w5eaqbg.mongodb.net/task-manager-api"
);
const Task = mongoose.model("Task",{
description:{
    type: String,
},
completed:{ 
    type: Boolean
},
});


module.exports = Task