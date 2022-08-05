const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
app.use(bodyParser.json())
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

const port = process.env.PORT || 3000

app.use(express.static('./public'))
app.use(express.json());


//routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log('Server is listening at http://localhost:' + port));
    } catch (error) {
        console.log(error);
    }
}

start()