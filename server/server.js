const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
dotenv.config()

//server app
const app = express()
app.use(cors())
app.use(express.json())

//create RESTFul APIs - API END Points - URL - CRUD - GET,POST,PUT,DELETE,
app.get('/',(req,res)=>{
    res.send("Welcome to Express server")
})

const PORT = process.env.PORT
//start server
app.listen(PORT,()=>{
    console.log("Express server started")
})