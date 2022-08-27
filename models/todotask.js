const mongoose = require('mongoose')

// kind of sets a template as a model to build documents in the db
// We can specify additional properties for each item in the document

const todoTaskSchema = new mongoose.Schema({    
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('TodoTask', todoTaskSchema, 'tasks')     //  (<name you want to call it>, <modelName>, <collectionName in DB>)

// 'TodoTask' is the name we use to reference it in the controller files
// 'todoTaskSchema' is the model specified above ^^
// 'tasks' is an optional argument