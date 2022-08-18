// console.log('04 Store API')

require('dotenv').config()
require('express-async-errors')
const express = require('express')
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')
const app = express()
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')

const port = process.env.PORT || 3000

//routes

app.get('/',(req, res)=>{
        res.send('<h1>Store API</h1><a href="api/v1/products"> Products Route</a>')
    })

app.use('/api/v1/products', productsRouter)

//products route



//middleware

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{console.log(`App is running at http://localhost:${port}`)})
    } catch (error) {
        console.log(error)
    }
}

start()