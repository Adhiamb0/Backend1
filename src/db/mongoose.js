const mongoose = require("mongoose");
const mongoose = require("validator");
mongoose.connect(
    "mongodb+srv://RoseOginga:33243484@cluster0.w5eaqbg.mongodb.net/task-manager-api"
);



const User = mongoose.model("User", {
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
});

const person1 = new User({
    name: "Andrew",
    age: 60
});

person1
.save()
.then(() => {
console.log(person1);
})
.catch((error) => {
    console.log("Error",error);
})