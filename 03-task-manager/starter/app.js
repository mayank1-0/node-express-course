const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')

app.use(bodyParser.json())

const port = 3000

app.use(express.json());

const start = async () => {
    try {
        await connectDB();
        app.listen(port, console.log('App is listening at http://localhost:' + port));
    } catch (error) {
        console.log(error);
    }
}

start()

app.get('/hello', (req,res)=>{
    res.send('Task Manager App');
})

//routes
// app.get('/api/v1/tasks', (req,res)=>{
//     res.send('Task Manager App');
// })

// app.post('/api/v1/tasks', (req,res)=>{
//     res.send('Task Manager App');
// })

// app.get('/api/v1/tasks/:id', (req,res)=>{
//     res.send('Task Manager App');
// })

// app.patch('/api/v1/tasks/:id', (req,res)=>{
//     res.send('Task Manager App');
// })

// app.delete('/api/v1/tasks/:id', (req,res)=>{
//     res.send('Task Manager App');
// })

app.use('/api/v1/tasks', tasks);