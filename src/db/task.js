//description - String
//description - Boolean

const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://RoseOginga:33243484@cluster0.w5eaqbg.mongodb.net/task-manager-api"
);
const Task = mongoose.model("Task",{
decsription: String,
completed: Boolean

});
const task = new Task({
decsription: "shopping",
Completed: "True"
});

task
.save()
.then(() => {
console.log(task);
})
.catch((error) => {
    console.log("Error",error);
})