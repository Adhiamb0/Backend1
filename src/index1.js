const express = require('express')
require("./db/mongoose")
const Task = require("./models/task")
const User = require("./models/user")
const cors = require("cors")

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(cors())

// app.post('/task', (req, res) => {
//     const task = new Task(req.body)
//     task.save()
//     .then(() => {
//         res.send(task)
//     })
//     .catch((e) => {
//         res.status(400).send(e)
//     })
//})
app.post("/users", (req, res) => {
    const user = new User(req.body)
    user
    .save()
    .then(() => {
        res.send(user)
    })
    .catch((error) => {
        res.status(400).send(error)
    });
});

app.get('/users',(req, res) => {
    User.find({})
    .then((users)=> {
        res.send(users);
    })
    .catch((error) => {
        res.status(500).send(error);
    });
});

app.listen(port, () => {
    console.log("Server is up on port " + port)
})
