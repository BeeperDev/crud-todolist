// Declare Variables
const express = require('express')
const app = express()
const PORT = 8000
const mongoose = require('mongoose')
const connectDB = require('./config/database')      // mongoose connection located here!
// const TodoTask = require("./models/todotask");      // imports the schema model
const homeRoutes = require('./routes/home')         // variable to require the home routes
const editRoutes = require('./routes/edit')         // variable to require the edit routes
require('dotenv').config({path: './config/.env'})   // specify the path of our .env file. (go up one folder to the config folder and you'll find the .env)


connectDB()         // calling the function that connects us to the DB


// add middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// SET ROUTES
app.use('/', homeRoutes)
app.use('/edit', editRoutes)


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})