const express = require('express')
require('./db/mongoose')
const Task = require('./models/task')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.post('/task', (req, res) => {
    const task = new Task(req.body)
    task.save().then(() => {
        res.send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
