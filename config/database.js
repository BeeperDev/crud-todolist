const mongoose = require('mongoose')

const connectDB = async () => {          //making a function so we can call it in server.js. and also export the connection
    try {
        const conn = await mongoose.connect(process.env.DB_CONNECTION)      // mongoose no longer needs useNewUrlParser or any other thingys
            console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB