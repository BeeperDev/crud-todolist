const TodoTask = require('../models/todotask')

module.exports = {
    getEdit : (req, res) => {
        const id = req.params.id
        TodoTask.find({}, (err, tasks) => {
            res.render('edit.ejs', {
                todoTasks: tasks,       // full task list
                idTask: id              // specific task
            })
        })
    },
    deleteTask : (req,res) => {
        const id = req.params.id        // grab id out of the route
        TodoTask.findByIdAndRemove(id, err => {         // find item in model DB, remove it!
            if (err) return res.status(500).send(err)
            res.redirect('/')           // redirect back to the homepage
        })
    },
    updateTask : (req, res) => {
        const id = req.params.id    // grab the specific id from the route
        TodoTask.findByIdAndUpdate(     
            id, // pass in the id
            {
                title: req.body.title,  // pass in the title 
                content: req.body.content   // pass in the content
            },
            err => {
                if (err) return res.status(500).send(err)
                res.redirect('/')
            }
        )
    }
}
