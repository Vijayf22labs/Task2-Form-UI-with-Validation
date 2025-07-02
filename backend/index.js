const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')

const PORT = process.env.PORT
const { connectDb, db } = require('./config/connectDb')
const connectCloudinary = require('./config/connectCloudinary')
const contactRouter = require('./routes/contactRoute')

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['PUT', 'POST', 'GET', 'DELETE'],
    credentials: true
}))

app.use('/api/v1/contact', contactRouter)

const startServer = async() =>{
    try{
        await connectDb()
        await db.sync()
        await connectCloudinary()
        app.listen(PORT, () =>{
            console.log(`Server Running Successfully`) 
        })
    }
    catch(err){
        console.log(`Error in Running Server - ${err.message}`)
        process.exit(1)
    }
}

startServer()